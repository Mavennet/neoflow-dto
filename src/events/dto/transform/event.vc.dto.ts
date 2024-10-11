import { Type } from 'class-transformer'
import {
  IsOptional,
  ArrayMinSize,
  IsArray,
  IsDateString,
  IsNotEmpty,
  IsString,
  Matches,
  ValidateNested,
  IsUrl
} from 'class-validator'
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
  @IsUrl({ require_tld: false })
  id: string

  @IsArray()
  @ArrayMinSize(1)
  type: string[]

  @IsNotEmpty()
  @IsString()
  @Matches(/^did:/)
  issuer: string

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
