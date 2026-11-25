const { CosmosClient } = require("@azure/cosmos");
const { randomUUID } = require("crypto");

function json(context, status, body) {
  context.res = {
    status,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  };
}

module.exports = async function (context, req) {
  try {
    const client = new CosmosClient({ endpoint: process.env.COSMOS_ENDPOINT, key: process.env.COSMOS_KEY });
    const container = client.database("cookbook").container("recipes");

    if (req.method === "GET") {
      const { resources } = await container.items.query("SELECT * FROM c").fetchAll();
      return json(context, 200, resources);
    }
    if (req.method === "POST") {
      const b = req.body || {};
      const title = String(b.title || "").trim();
      if (!title || title.length > 120) {
        return json(context, 400, { error: "title required (max 120 chars)" });
      }
      const item = {
        id: randomUUID(),
        title,
        ingredients: Array.isArray(b.ingredients) ? b.ingredients.map(String).slice(0, 50) : [],
        steps: Array.isArray(b.steps) ? b.steps.map(String).slice(0, 50) : [],
        createdAt: new Date().toISOString()
      };
      const { resource } = await container.items.create(item);
      return json(context, 201, resource);
    }
    return json(context, 405, { error: "method not allowed" });
  } catch (e) {
    context.log.error(e);
    return json(context, 500, { error: "internal error" });
  }
};
