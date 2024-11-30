import { AGENT_TransportationEventCredentialSubjectDTO, CORE_TransportationEventCredentialSubjectDTO } from './event.credentialSubject.dto';
import { CredentialDTO } from '../../../credentials';
export declare class CORE_TransportationEventDetailsDTO extends CredentialDTO<CORE_TransportationEventCredentialSubjectDTO> {
    credentialSubject: CORE_TransportationEventCredentialSubjectDTO;
}
export declare class AGENT_TransportationEventDetailsDTO extends CredentialDTO<AGENT_TransportationEventCredentialSubjectDTO> {
    credentialSubject: AGENT_TransportationEventCredentialSubjectDTO;
}
