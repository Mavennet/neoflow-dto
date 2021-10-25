import { VerifiableCredentialDTO } from '../../../general/dto/verifiableCredential.dto';
import { CORE_TransportationEventCredentialSubjectDTO, AGENT_TransportationEventCredentialSubjectDTO } from './event.credentialSubject.dto';
declare class TransportationEventDetailsDTOBase {
    '@context': string[];
    id: string;
    type: string[];
    issuer: string;
    issuanceDate: Date;
    proof: VerifiableCredentialDTO;
}
export declare class CORE_TransportationEventDetailsDTO extends TransportationEventDetailsDTOBase {
    credentialSubject: CORE_TransportationEventCredentialSubjectDTO;
}
export declare class AGENT_TransportationEventDetailsDTO extends TransportationEventDetailsDTOBase {
    credentialSubject: AGENT_TransportationEventCredentialSubjectDTO;
}
export {};
