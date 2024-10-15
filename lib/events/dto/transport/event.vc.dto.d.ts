import { ProofDTO } from '../../../general/dto/proof.dto';
import { AGENT_TransportationEventCredentialSubjectDTO, CORE_TransportationEventCredentialSubjectDTO } from './event.credentialSubject.dto';
declare class TransportationEventDetailsDTOBase {
    '@context': string[];
    id: string;
    type: string[];
    issuer: string;
    validFrom?: string | Date;
    proof: ProofDTO;
}
export declare class CORE_TransportationEventDetailsDTO extends TransportationEventDetailsDTOBase {
    credentialSubject: CORE_TransportationEventCredentialSubjectDTO;
}
export declare class AGENT_TransportationEventDetailsDTO extends TransportationEventDetailsDTOBase {
    credentialSubject: AGENT_TransportationEventCredentialSubjectDTO;
}
export {};
