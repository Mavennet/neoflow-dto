import { VerifiableCredentialDTO, JSON_TYPE } from '../../../general';
import { CORE_StorageEventCredentialSubjectDTO } from './event.credentialSubject.dto';
export declare class StorageEventVCDTO extends VerifiableCredentialDTO {
    '@context': string[];
    type: JSON_TYPE[];
    credentialSubject: CORE_StorageEventCredentialSubjectDTO;
}