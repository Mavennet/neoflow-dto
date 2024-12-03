import { Type } from 'class-transformer'
import { ArrayMinSize, IsArray, IsDateString, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { IssuerDTO } from '../../../general'
import { ProofDTO } from '../../../general/dto/proof.dto'
import {
  AGENT_TransformationEventCredentialSubjectDTO,
  CORE_TransformationEventCredentialSubjectDTO
} from './event.credentialSubject.dto'

class TransformationEventDetailsDTOBase {
  @IsArray()
  @ArrayMinSize(1)
  '@context': string[]

  @IsNotEmpty()
  id: string

  @IsArray()
  @ArrayMinSize(1)
  type: string[]

  @IsNotEmpty()
  @Type(() => IssuerDTO)
  issuer: IssuerDTO

  @IsOptional()
  @IsDateString()
  validFrom?: string | Date

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ProofDTO)
  proof: ProofDTO
}

export class CORE_TransformationEventDetailsDTO extends TransformationEventDetailsDTOBase {
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => CORE_TransformationEventCredentialSubjectDTO)
  credentialSubject: CORE_TransformationEventCredentialSubjectDTO
}

export class AGENT_TransformationEventDetailsDTO extends TransformationEventDetailsDTOBase {
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => AGENT_TransformationEventCredentialSubjectDTO)
  credentialSubject: AGENT_TransformationEventCredentialSubjectDTO
}
