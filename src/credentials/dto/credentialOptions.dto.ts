import { IsOptional } from 'class-validator'
import { CredentialOptionsDTO as CredentialOptionsDTOBase } from '@mavennet/traceability-dto'

export class CredentialOptionsDTO extends CredentialOptionsDTOBase {
  @IsOptional()
  assertionMethod?: string

  @IsOptional()
  issuanceDate?: string

  @IsOptional()
  challenge?: string

  @IsOptional()
  domain?: string
}
