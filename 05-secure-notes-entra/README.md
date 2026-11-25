# 05 Secure Notes App

A notes app where each user signs in with Microsoft Entra ID and can only read and write their own notes.

## Architecture

<!-- TODO: diagram showing sign-in flow and token validation -->

## Azure resources

| Resource | Name | Region | Tier |
|----------|------|--------|------|
| Resource group | `rg-secure-notes` | TBD | n/a |
| Entra app registration | TBD | n/a | Free |
| Hosting (App Service or Static Web App) | TBD | TBD | Free tier if available |

## Steps

TBD. Fill in after the course is reviewed.

## Security notes

- Auth flow: TBD (OIDC authorization code with PKCE expected).
- Token validation on the API: issuer, audience, expiry, and signature checked.
- Authorization: every read and write is scoped to the caller's user ID. Test with a second account to confirm no cross-user access (IDOR check).
- Redirect URIs and scopes limited to what the app needs.
- No client secrets in the frontend.
- Threat model: TBD.

## Cost and cleanup

- Expected cost: Entra ID Free plus hosting free tier.
- Cleanup: delete the resource group and the app registration.

## Lessons learned

TBD.
