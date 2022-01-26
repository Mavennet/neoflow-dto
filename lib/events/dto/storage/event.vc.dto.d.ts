import { VerifiableCredentialDTO } from '../../../credentials/dto/verifiableCredential.dto';
import { CORE_StorageEventCredentialSubjectDTO, AGENT_StorageEventCredentialSubjectDTO } from './event.credentialSubject.dto';
declare class StorageEventDetailsDTOBase {
    id: string;
    '@context': string[];
    issuer: string;
    issuanceDate: Date;
    proof: VerifiableCredentialDTO;
}
export declare class AGENT_StorageEventDetailsDTO extends StorageEventDetailsDTOBase {
    id: string;
    credentialSubject: AGENT_StorageEventCredentialSubjectDTO;
}
export declare class CORE_StorageEventDetailsDTO extends StorageEventDetailsDTOBase {
    credentialSubject: CORE_StorageEventCredentialSubjectDTO;
}
export {};
