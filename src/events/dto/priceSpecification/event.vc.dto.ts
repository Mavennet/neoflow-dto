import { Type } from 'class-transformer'
import {
  ArrayContains,
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  ValidateNested
} from 'class-validator'
import { ProofDTO } from '../../../general/dto/proof.dto'
import { PriceSpecificationCredentialSubjectDTO } from './event.credentialSubject.dto'

export class PriceSpecificationDetailsDTO {
  @IsArray()
  @ArrayMinSize(1)
  '@context': string[]

  @IsNotEmpty()
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
  validFrom?: string | Date

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => PriceSpecificationCredentialSubjectDTO)
  credentialSubject: PriceSpecificationCredentialSubjectDTO

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ProofDTO)
  proof: ProofDTO
}
