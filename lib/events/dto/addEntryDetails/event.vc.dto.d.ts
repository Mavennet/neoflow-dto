import { VerifiableCredentialDTO, JSON_TYPE } from '../../../general';
import { CORE_AddEntryDetailsCredentialSubjectDTO, BASE_AddEntryDetailsCredentialSubject } from './event.credentialSubject.dto';
export declare class BASE_AddEntryDetailsVCDTO extends VerifiableCredentialDTO {
    '@context': string[];
    type: JSON_TYPE[];
    credentialSubject: BASE_AddEntryDetailsCredentialSubject;
}
export declare class CORE_AddEntryDetailsVCDTO extends VerifiableCredentialDTO {
    '@context': string[];
    type: JSON_TYPE[];
    credentialSubject: CORE_AddEntryDetailsCredentialSubjectDTO;
}
