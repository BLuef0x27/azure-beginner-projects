# Azure Beginner Projects

Hands-on Azure projects by Christopher M. Huffstetler. Each folder is a standalone project with its own README, architecture notes, and a short security section.

| # | Project | Azure services | Status |
|---|---------|----------------|--------|
| 01 | [Recipe Cookbook](01-recipe-cookbook/) | Static Web Apps, Azure Functions, Cosmos DB | Not started |
| 02 | [AI Photo Inspector](02-ai-photo-inspector/) | AI Vision | Not started |
| 03 | [Audiobook Generator](03-audiobook-generator/) | AI Speech | Not started |
| 04 | [3-Tier Web App](04-three-tier-web-app/) | App Service, Azure SQL | Not started |
| 05 | [Secure Notes App](05-secure-notes-entra/) | Microsoft Entra ID | Not started |

## Goals

- Build each project end to end, not just follow steps.
- Document architecture, decisions, and what would change for production.
- Apply a security lens to every project: secrets handling, least privilege, auth, logging, and cost controls.

## Ground rules

- No keys, connection strings, or `.env` files are committed. Use `.env.example` instead.
- Each project lists a cleanup step so resources stop billing.
- Course lesson text and code are not copied. Each project is my own implementation.
