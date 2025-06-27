import { DeliveryTicketCredentialSubjectDTO } from './event.credentialSubject.dto';
import { EnvelopedVerifiableCredential } from '../../../credentials';
import { WrappedEnvelopedVCDTO } from '../../../general';
export declare class CORE_DeliveryTicketDTO {
    productId: string;
    gasShipmentId?: string;
    uploadFileKey?: string;
    eventVC: WrappedEnvelopedVCDTO;
}
export declare class AGENT_DeliveryTicketDTO {
    productId: string;
    workflowId: string;
    gasShipmentId: string;
    uploadFileKey?: string;
    credentialSubject: DeliveryTicketCredentialSubjectDTO;
}
export declare enum DELIVERY_TICKET_STATUS {
    SUCCESS = "SUCCESS",
    DUPLICATE = "DUPLICATE"
}
export declare class CORE_DeliveryTicketResponseDto {
    deliveryTicketStatus: DELIVERY_TICKET_STATUS;
    eventVC?: EnvelopedVerifiableCredential;
}
