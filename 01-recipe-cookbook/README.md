# 01 Recipe Cookbook

A recipe app hosted on Azure Static Web Apps, with an Azure Functions API backed by Azure Cosmos DB.

## Architecture

```
Browser -> Azure Static Web Apps (frontend)
              |
              +-> /api/* -> Azure Functions (Node.js or Python)
                                |
                                +-> Azure Cosmos DB (NoSQL)
```

<!-- TODO: add architecture diagram (see diagram-maker or draw.io export) -->

## Azure resources

| Resource | Name | Region | Tier |
|----------|------|--------|------|
| Resource group | `rg-recipe-cookbook` | TBD | n/a |
| Static Web App | `swa-recipe-cookbook` | TBD | Free |
| Cosmos DB account | TBD (globally unique) | TBD | Free tier if available |
| Database / container | `cookbook` / `recipes` | n/a | Partition key: TBD |

## Steps

1. Deploy the frontend to Azure Static Web Apps from GitHub.
2. Create the Functions API in the `/api` folder.
3. Create the Cosmos DB account, database, and container.
4. Connect Functions to Cosmos DB through application settings.
5. Connect the frontend to `/api/*` with relative paths.
6. Test, document results, then clean up.

## Design decisions

- **Partition key:** TBD. Reason: TBD.
- **Auth level:** anonymous for the course. Production would require Entra ID or an API key.

## Security notes

- Cosmos DB key or connection string is stored in Static Web App application settings, never in the repo.
- `local.settings.json` and `.env` are in `.gitignore`.
- Input validation on recipe create and update: TBD.
- Anonymous write access is a known gap. Production would restrict writes to authenticated users.

## Cost and cleanup

- Expected cost: free tier only, if available.
- Cleanup: `az group delete --name rg-recipe-cookbook --yes --no-wait`

## Lessons learned

TBD after completion.
