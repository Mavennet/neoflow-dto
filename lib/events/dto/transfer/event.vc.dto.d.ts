import { VerifiableCredentialDTO } from '../../../general';
import { CORE_TransferEventCredentialSubjectDTO } from './event.credentialSubject.dto';
export declare class TransferEventVCDTO extends VerifiableCredentialDTO {
    '@context': string[];
    type: any;
    credentialSubject: CORE_TransferEventCredentialSubjectDTO;
}
