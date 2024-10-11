import { ProofDTO } from '../../../general/dto/proof.dto';
import { AGENT_StorageEventCredentialSubjectDTO, CORE_StorageEventCredentialSubjectDTO } from './event.credentialSubject.dto';
declare class StorageEventDetailsDTOBase {
    id: string;
    '@context': string[];
    issuer: string;
    validFrom?: string | Date;
    proof: ProofDTO;
}
export declare class AGENT_StorageEventDetailsDTO extends StorageEventDetailsDTOBase {
    credentialSubject: AGENT_StorageEventCredentialSubjectDTO;
}
export declare class CORE_StorageEventDetailsDTO extends StorageEventDetailsDTOBase {
    credentialSubject: CORE_StorageEventCredentialSubjectDTO;
}
export {};
