import { VerifiableCredentialDTO, JSON_TYPE } from '../../../general';
import { AGENT_AddEntryDetailsCredentialSubjectDTO, CORE_AddEntryDetailsCredentialSubjectDTO } from './event.credentialSubject.dto';
export declare class BASE_AddEntryDetailsVCDTO extends VerifiableCredentialDTO {
    '@context': string[];
    type: JSON_TYPE[];
    credentialSubject: AGENT_AddEntryDetailsCredentialSubjectDTO;
}
export declare class CORE_AddEntryDetailsVCDTO extends VerifiableCredentialDTO {
    '@context': string[];
    type: JSON_TYPE[];
    credentialSubject: CORE_AddEntryDetailsCredentialSubjectDTO;
}
