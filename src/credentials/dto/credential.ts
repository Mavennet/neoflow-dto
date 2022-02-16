import { IsArray, ArrayMinSize, IsOptional, IsNotEmpty } from 'class-validator'

export class CredentialDTO {
  @IsArray()
  @ArrayMinSize(1)
  '@context'

  id: string

  @IsArray()
  @ArrayMinSize(1)
  type

  @IsNotEmpty()
  issuer: string

  @IsNotEmpty()
  issuanceDate: string

  @IsOptional()
  expirationDate?: string

  @IsNotEmpty()
  credentialSubject
}
