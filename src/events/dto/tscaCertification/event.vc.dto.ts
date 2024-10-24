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
import { TSCACertificationCredentialSubjectDTO } from './event.credentialSubject.dto'

export class TSCACertificationDetailsDTO {
  @IsArray()
  @ArrayMinSize(1)
  '@context': string[]

  @IsNotEmpty()
  id: string

  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(2)
  @ArrayContains(['VerifiableCredential', 'TSCACertificationCredential'])
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
  @Type(() => TSCACertificationCredentialSubjectDTO)
  credentialSubject: TSCACertificationCredentialSubjectDTO

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ProofDTO)
  proof: ProofDTO
}
