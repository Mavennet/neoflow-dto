import { VerifiableCredentialDTO } from '../../../general/dto/verifiableCredential.dto';
import { TransportationEventCredentialSubjectDTO } from './transportationEventCredentialSubject.dto';
export declare class TransportationEventDetailsDTO {
    '@context': string[];
    id: string;
    type: string[];
    issuer: string;
    issuanceDate: Date;
    credentialSubject: TransportationEventCredentialSubjectDTO;
    proof: VerifiableCredentialDTO;
}
