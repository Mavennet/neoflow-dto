import { VerifiableCredentialDTO } from '../../general/dto/verifiableCredential.dto';
import { TransformationEventCredentialSubjectDTO } from './transformationEventCredentialSubject.dto';
export declare class TransformationEventDetailsDTO {
    '@context': string[];
    id: string;
    type: string[];
    issuer: string;
    issuanceDate: Date;
    credentialSubject: TransformationEventCredentialSubjectDTO;
    proof: VerifiableCredentialDTO;
}
