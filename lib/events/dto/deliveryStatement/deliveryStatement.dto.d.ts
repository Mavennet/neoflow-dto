import { DeliveryStatementCredentialSubjectDTO } from './event.credentialSubject.dto';
import { EnvelopedVerifiableCredential } from '@mavennet/traceability-dto';
export declare class CORE_DeliveryStatementDTO {
    productId: string;
    gasShipmentId: string;
    uploadFileKey?: string;
    eventId: string;
    eventVC: EnvelopedVerifiableCredential;
}
export declare class AGENT_DeliveryStatementDTO {
    productId: string;
    gasShipmentId: string;
    uploadFileKey?: string;
    credentialSubject: DeliveryStatementCredentialSubjectDTO;
}
