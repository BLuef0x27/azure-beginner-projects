# 02 AI Photo Inspector

Upload a photo and get back AI-generated tags, captions, and detected objects using Azure AI Vision.

## Architecture

<!-- TODO: diagram -->

## Azure resources

| Resource | Name | Region | Tier |
|----------|------|--------|------|
| Resource group | `rg-photo-inspector` | TBD | n/a |
| AI Vision account | TBD | TBD | F0 (free) |

## Steps

TBD. Fill in after the course is reviewed.

## Security notes

- AI Vision key stored in environment settings, never in code.
- Uploaded image validation (type, size): TBD.
- Do not log image contents or returned personal data.

## Cost and cleanup

- Expected cost: F0 free tier.
- Cleanup: `az group delete --name rg-photo-inspector --yes --no-wait`

## Lessons learned

TBD.
