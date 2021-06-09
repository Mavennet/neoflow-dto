import { JSON_TYPE, VerifiableCredentialDTO } from '../../../general';
import { CORE_TransferEventCredentialSubjectDTO } from './event.credentialSubject.dto';
export declare class TransferEventVCDTO extends VerifiableCredentialDTO {
    '@context': string[];
    type: JSON_TYPE[];
    credentialSubject: CORE_TransferEventCredentialSubjectDTO;
}
