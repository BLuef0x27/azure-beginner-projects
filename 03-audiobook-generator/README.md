# 03 Audiobook Generator

Convert text chapters into audio files using Azure AI Speech.

## Architecture

<!-- TODO: diagram -->

## Azure resources

| Resource | Name | Region | Tier |
|----------|------|--------|------|
| Resource group | `rg-audiobook-gen` | TBD | n/a |
| AI Speech account | TBD | TBD | F0 (free) |
| Storage account (output) | TBD | TBD | Standard LRS |

## Steps

TBD. Fill in after the course is reviewed.

## Security notes

- Speech key stored in environment settings, never in code.
- Input text length and chunking limits set to control cost.
- Output container set to private access.

## Cost and cleanup

- Expected cost: low, based on characters synthesized.
- Cleanup: `az group delete --name rg-audiobook-gen --yes --no-wait`

## Lessons learned

TBD.
