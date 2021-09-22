import { VerifiableCredentialDTO } from '../../../general/dto/verifiableCredential.dto';
import { TransferEventCredentialSubjectDTO } from './transferEventCredentialSubject.dto';
export declare class TransferEventDetailsDTO {
    '@context': string[];
    id: string;
    type: string[];
    issuer: string;
    issuanceDate: Date;
    credentialSubject: TransferEventCredentialSubjectDTO;
    proof: VerifiableCredentialDTO;
}
