import {
  IsNotEmpty,
  IsArray,
  IsString,
  IsDateString,
  ArrayMinSize,
  ValidateNested,
  Matches,
  IsUrl
} from 'class-validator'
import { Type } from 'class-transformer'
import { ProofDTO } from '../../../general/dto/proof.dto'
import {
  CORE_TransportationEventCredentialSubjectDTO,
  AGENT_TransportationEventCredentialSubjectDTO
} from './event.credentialSubject.dto'

class TransportationEventDetailsDTOBase {
  @IsArray()
  @ArrayMinSize(1)
  '@context': string[]

  @IsNotEmpty()
  @Matches(/^http(?::\/\/localhost:\d{4}\/v1\/credentials\/verify|s:\/\/api\-(?:prod|staging)\..+\.neoflow\.energy)/)
  id: string

  @IsArray()
  @ArrayMinSize(1)
  type: string[]

  @IsNotEmpty()
  @IsString()
  @Matches(/^did:/)
  issuer: string

  @IsNotEmpty()
  @IsDateString()
  issuanceDate: string | Date

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ProofDTO)
  proof: ProofDTO
}

export class CORE_TransportationEventDetailsDTO extends TransportationEventDetailsDTOBase {
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => CORE_TransportationEventCredentialSubjectDTO)
  credentialSubject: CORE_TransportationEventCredentialSubjectDTO
}

export class AGENT_TransportationEventDetailsDTO extends TransportationEventDetailsDTOBase {
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => AGENT_TransportationEventCredentialSubjectDTO)
  credentialSubject: AGENT_TransportationEventCredentialSubjectDTO
}
