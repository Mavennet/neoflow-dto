import { VerifiableCredentialDTO } from '../../../general/dto/verifiableCredential.dto';
import { AGENT_InspectionEventCredentialSubjectDTO } from './inspectionEventCredentialSubject.dto';
declare class InspectionEventDetailsDTOBase {
    '@context': string[];
    id: string;
    type: string[];
    issuer: string;
    issuanceDate: Date;
    credentialSubject: AGENT_InspectionEventCredentialSubjectDTO;
    proof: VerifiableCredentialDTO;
}
export declare class InspectionEventDetailsDTO extends InspectionEventDetailsDTOBase {
}
export {};
