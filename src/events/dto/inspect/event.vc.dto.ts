import { Type } from 'class-transformer'
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsDateString,
  IsNotEmpty,
  IsOptional,
  ValidateIf,
  ValidateNested
} from 'class-validator'
import { IssuerDTO } from '../../../general'
import { ProofDTO } from '../../../general/dto/proof.dto'
import { InspectionEventCredentialSubjectDTO } from './event.credentialSubject.dto'

export class InspectionEventDetailsDTO {
  @IsArray()
  @ArrayMinSize(1)
  '@context': string[]

  @IsNotEmpty()
  id: string

  @IsArray()
  @ArrayMinSize(2)
  @ArrayMaxSize(2)
  @ValidateIf((o) => o.type.includes('VerifiableCredential') && o.type.includes('InspectionEventCredential'))
  type: string[]

  @IsNotEmpty()
  @Type(() => IssuerDTO)
  issuer: IssuerDTO

  @IsOptional()
  @IsDateString()
  validFrom?: string | Date

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => InspectionEventCredentialSubjectDTO)
  credentialSubject: InspectionEventCredentialSubjectDTO

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ProofDTO)
  proof: ProofDTO
}
