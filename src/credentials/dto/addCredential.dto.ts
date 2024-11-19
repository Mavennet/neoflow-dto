import { Type } from 'class-transformer'
import { ArrayNotEmpty, IsNotEmpty, IsOptional, IsString, IsUrl, Validate, ValidateNested } from 'class-validator'
import { ProofDTO } from '../../general'

export class AddCredentialDTO {
  @IsString()
  id: string

  @IsUrl({}, { each: true })
  @Validate((o) => o['@context'].includes('https://www.w3.org/ns/credentials/v2'))
  @ArrayNotEmpty()
  '@context': string[]

  @IsNotEmpty()
  @IsString({ each: true })
  type: string[]

  @IsNotEmpty()
  @IsString()
  issuer: string

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ProofDTO)
  proof: ProofDTO

  @IsNotEmpty()
  credentialSubject: JSON

  @IsOptional()
  credentialStatus?: JSON
}
