import { VerifiableCredentialDTO } from '../../general/dto/verifiableCredential.dto';
import { CreationEventCredentialSubjectDTO } from './creationEventCredentialSubject.dto';
export declare class CreationEventDetailsDTO {
    '@context': string[];
    id: string;
    type: string[];
    issuer: string;
    issuanceDate: Date;
    credentialSubject: CreationEventCredentialSubjectDTO;
    proof: VerifiableCredentialDTO;
}
