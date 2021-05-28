import { VerifiableCredentialDTO } from '../../../general';
import { TransferEventCredentialSubjectDTO } from './event.credentialSubject.dto';
export declare class TransferEventVCDTO extends VerifiableCredentialDTO {
    '@context': string[];
    type: string[];
    credentialSubject: TransferEventCredentialSubjectDTO | TransferEventCredentialSubjectDTO;
}
