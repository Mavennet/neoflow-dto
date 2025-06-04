import { InspectionEventCredentialSubjectDTO } from './event.credentialSubject.dto';
import { EnvelopedVerifiableCredential } from '../../../credentials';
export declare class CORE_InspectProductDTO {
    productId: string;
    eventId: string;
    eventVC: EnvelopedVerifiableCredential;
}
export declare class AGENT_InspectProductDTO {
    productId: string;
    inspectCredentialSubject: InspectionEventCredentialSubjectDTO;
}
