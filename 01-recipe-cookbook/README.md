# 01 Recipe Cookbook

A recipe app hosted on Azure Static Web Apps. An Azure Functions API saves recipes to Azure Cosmos DB.

**Status:** Complete. Deployed and tested end to end.

## Architecture

```
Browser -> Azure Static Web Apps (frontend, /)
              |
              +-> /api/recipes -> Azure Functions (Node.js, managed by SWA)
                                     |
                                     +-> Azure Cosmos DB (NoSQL, database "cookbook", container "recipes")
```

The frontend and API deploy together from one Static Web App, so the browser calls `/api/recipes` on the same host and CORS isn't needed.

## Azure resources

| Resource | Name pattern | Region | Tier |
|----------|--------------|--------|------|
| Resource group | `rg-recipe-cookbook` | East US | n/a |
| Static Web App | `swa-recipe-cookbook-<suffix>` | East US 2 | Free |
| Cosmos DB account | `cosmos-cookbook-<suffix>` | East US | Provisioned, Session consistency |
| Database / container | `cookbook` / `recipes` | n/a | Partition key `/id` |

## Steps

1. Register the resource providers: `Microsoft.DocumentDB` and `Microsoft.Web`.
2. Create the Cosmos DB account, then the `cookbook` database and `recipes` container with partition key `/id`.
3. Create the Static Web App on the Free plan.
4. Put the API code in `api/` and the frontend in `frontend/`.
5. Add `COSMOS_ENDPOINT` and `COSMOS_KEY` as Static Web App application settings.
6. Deploy with the Static Web Apps CLI, then test `POST` and `GET /api/recipes`.
7. Clean up by deleting the resource group.

## Design decisions

- **Partition key `/id`:** each recipe is a single document with no related lookups, so `/id` spreads writes evenly with no hot partition. The API reads the full list with a cross-partition query, which is fine at this size.
- **Free plan:** enough for a learning app. Free plans don't support the Standard-only management commands, such as listing functions with `az staticwebapp functions show`.
- **JSON responses:** the handler sets `Content-Type: application/json` and returns a JSON body on every path, including errors.

## Security notes

- The Cosmos DB key is stored in Static Web App application settings, not in code or the repo. `.gitignore` excludes `.env` and `local.settings.json`.
- Input is limited: titles are required and capped at 120 characters, and ingredient and step lists are capped at 50 items each.
- Errors return a generic message. Details go to the function log, not the response.
- **Known gap:** the API uses `authLevel: anonymous`, so anyone can add recipes. That's acceptable for a learning app. Production would require Entra ID sign-in on the API and limit writes to signed-in users.
- **Known gap:** the app uses the account key. Production would use a managed identity with a Cosmos DB data-plane role instead of a key.
- The API has no edit or delete endpoints. Delete test data in the Cosmos DB Data Explorer.

## Cost and cleanup

- Cosmos DB bills for provisioned throughput while the account exists, even when idle. Delete it when finished.
- Cleanup: `az group delete --name rg-recipe-cookbook --yes --no-wait`

## Lessons learned

- A new subscription must register `Microsoft.DocumentDB` before Cosmos DB can be created. The error text is `MissingSubscriptionRegistration`.
- The `--enable-free-tier` flag is a preview option. It's not needed to create an account, so leave it off.
- The first API response returned HTTP 500 with an empty body. I rewrote the handler to create the Cosmos client inside the request and return JSON on every path. The API then returned 201. I didn't isolate which change fixed it, so treat the fix as a combination.
- Shell differences matter. Cloud Shell in PowerShell doesn't accept `VAR=value` syntax, so use Bash.
- Azure Static Web Apps CLI output can include secrets. Don't paste it into chat.
