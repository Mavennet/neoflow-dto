import { IsArray, ArrayMinSize, IsUrl, IsOptional, IsNotEmpty } from 'class-validator'

export class CredentialDTO {
  @IsArray()
  @ArrayMinSize(1)
  @IsUrl({}, { each: true })
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
