import { VerifiableCredentialDTO } from '../../general/dto/verifiableCredential.dto';
import { InspectionEventCredentialSubjectDTO } from './inspectionEventCredentialSubject.dto';
export declare class InspectionEventDetailsDTO {
    '@context': string[];
    id: string;
    type: string[];
    issuer: string;
    issuanceDate: Date;
    credentialSubject: InspectionEventCredentialSubjectDTO;
    proof: VerifiableCredentialDTO;
}
