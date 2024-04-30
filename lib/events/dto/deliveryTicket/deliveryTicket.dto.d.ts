import { DeliveryTicketCredentialSubjectDTO } from './event.credentialSubject.dto';
import { DeliveryTicketVCDTO } from './event.vc.dto';
export declare class CORE_DeliveryTicketDTO {
    productId: string;
    gasShipmentId: string;
    uploadFileKey?: string;
    eventId: string;
    eventVC: DeliveryTicketVCDTO;
}
export declare class AGENT_DeliveryTicketDTO {
    productId: string;
    gasShipmentId: string;
    uploadFileKey?: string;
    credentialSubject: DeliveryTicketCredentialSubjectDTO;
}
