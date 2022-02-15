import { VerifiableCredentialDTO } from '../../../credentials/dto/verifiableCredential.dto';
import { AGENT_InspectionEventCredentialSubjectDTO } from './event.credentialSubject.dto';
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
