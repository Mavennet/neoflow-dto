import { IsIn, IsOptional } from 'class-validator'

export class CredentialOptions {
  @IsOptional()
  @IsIn(['assertionMethod', 'authentication'])
  proofPurpose?: 'assertionMethod' | 'authentication'

  @IsOptional()
  assertionMethod?: string

  @IsOptional()
  issuanceDate?: string

  @IsOptional()
  issuer?: string

  @IsOptional()
  verificationMethod?: string

  @IsOptional()
  created?: string

  @IsOptional()
  challenge?: string

  @IsOptional()
  domain?: string

  @IsOptional()
  credentialStatus?
}
