import { VerifiableCredentialDTO, JSON_TYPE } from '../../../general';
import { CORE_AddEntryDetailsCredentialSubjectDTO } from './event.credentialSubject.dto';
export declare class AddEntryDetailsVCDTO extends VerifiableCredentialDTO {
    '@context': string[];
    type: JSON_TYPE[];
    credentialSubject: CORE_AddEntryDetailsCredentialSubjectDTO;
}
