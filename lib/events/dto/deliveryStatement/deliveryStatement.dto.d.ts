import { DeliveryStatementCredentialSubjectDTO } from './event.credentialSubject.dto';
import { DeliveryStatementVCDTO } from './event.vc.dto';
export declare class CORE_DeliveryStatementDTO {
    productId: string;
    gasShipmentId: string;
    uploadFileKey?: string;
    eventId: string;
    eventVC: DeliveryStatementVCDTO;
}
export declare class AGENT_DeliveryStatementDTO {
    productId: string;
    gasShipmentId: string;
    uploadFileKey?: string;
    credentialSubject: DeliveryStatementCredentialSubjectDTO;
}
