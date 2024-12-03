import { Type } from 'class-transformer'
import { IsNotEmpty, ValidateNested } from 'class-validator'
import { CredentialDTO } from '../../../credentials'
import {
  AGENT_TransportationEventCredentialSubjectDTO,
  CORE_TransportationEventCredentialSubjectDTO
} from './event.credentialSubject.dto'

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
