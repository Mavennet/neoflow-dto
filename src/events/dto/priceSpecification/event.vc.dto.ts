import {
  IsOptional,
  IsNotEmpty,
  IsArray,
  IsString,
  IsDateString,
  ArrayMinSize,
  ArrayMaxSize,
  ValidateNested,
  Matches,
  IsUrl,
  ArrayContains
} from 'class-validator'
import { Type } from 'class-transformer'
import { ProofDTO } from '../../../general/dto/proof.dto'
import { PriceSpecificationCredentialSubjectDTO } from './event.credentialSubject.dto'

export class PriceSpecificationDetailsDTO {
  @IsArray()
  @ArrayMinSize(1)
  '@context': string[]

  @IsNotEmpty()
  @IsUrl({ require_tld: false })
  id: string

  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(2)
  @ArrayContains(['VerifiableCredential'])
  type: string[]

  @IsOptional()
  @IsString()
  @Matches(/^did:/)
  issuer?: string

  @IsOptional()
  @IsDateString()
  issuanceDate?: string | Date

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => PriceSpecificationCredentialSubjectDTO)
  credentialSubject: PriceSpecificationCredentialSubjectDTO

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ProofDTO)
  proof: ProofDTO
}
