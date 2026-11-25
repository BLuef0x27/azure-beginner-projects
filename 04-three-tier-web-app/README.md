# 04 Three-Tier Web App

A web front end, an App Service app tier, and an Azure SQL data tier.

## Architecture

```
Browser -> App Service (web tier) -> App Service API (app tier) -> Azure SQL (data tier)
```

<!-- TODO: diagram with network boundaries -->

## Azure resources

| Resource | Name | Region | Tier |
|----------|------|--------|------|
| Resource group | `rg-three-tier-app` | TBD | n/a |
| App Service plan | TBD | TBD | Free or Basic (check cost) |
| Azure SQL server and database | TBD | TBD | Basic or serverless |

## Steps

TBD. Fill in after the course is reviewed.

## Security notes

- Prefer managed identity over SQL username and password where supported.
- SQL firewall limited to Azure services and known IPs only.
- HTTPS only and minimum TLS version set on App Service.
- Connection strings in App Service settings, not in code.

## Cost and cleanup

- Expected cost: may bill while running. SQL and App Service plans are the main costs.
- Cleanup: `az group delete --name rg-three-tier-app --yes --no-wait`

## Lessons learned

TBD.
