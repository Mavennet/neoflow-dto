import { Type } from 'class-transformer'
import {
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
import {
  AGENT_TransportationEventCredentialSubjectDTO,
  CORE_TransportationEventCredentialSubjectDTO
} from './event.credentialSubject.dto'
import { CredentialDTO } from '../../../credentials'

export class CORE_TransportationEventDetailsDTO extends CredentialDTO<CORE_TransportationEventCredentialSubjectDTO> {
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => CORE_TransportationEventCredentialSubjectDTO)
  credentialSubject: CORE_TransportationEventCredentialSubjectDTO
}

export class AGENT_TransportationEventDetailsDTO extends CredentialDTO<AGENT_TransportationEventCredentialSubjectDTO> {
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => AGENT_TransportationEventCredentialSubjectDTO)
  credentialSubject: AGENT_TransportationEventCredentialSubjectDTO
}
