import { VerifiableCredentialDTO } from '../../../general/dto/verifiableCredential.dto';
import { StorageEventCredentialSubjectDTO } from './storageEventCredentialSubject.dto';
export declare class StorageEventDetailsDTO {
    '@context': string[];
    id: string;
    type: string[];
    issuer: string;
    issuanceDate: Date;
    credentialSubject: StorageEventCredentialSubjectDTO;
    proof: VerifiableCredentialDTO;
}
