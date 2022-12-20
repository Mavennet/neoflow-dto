import { PlaceDTO } from '../../../general';
import { JSON_TYPE } from '../../../general/constants';
import { ProofDTO } from '../../../general/dto';
export declare class AGENT_DeliveryScheduledDTO {
    productId: string;
    receiver: string;
    portOfEntry?: PlaceDTO;
    portOfArrival?: PlaceDTO;
    portOfDestination?: PlaceDTO;
    countryOfDestination?: string;
    receiptLocation?: PlaceDTO;
    scheduledDate: string;
    hasDocuments: boolean;
}
export declare class DeliveryScheduled_VC_DTO {
    '@context': string[];
    id: string;
    type: JSON_TYPE[];
    issuer: string;
    credentialSubject: AGENT_DeliveryScheduledDTO;
    issuanceDate?: string | Date;
    proof: ProofDTO;
}
export declare class CORE_DeliveryScheduledDTO {
    productId: string;
    eventId: string;
    eventVC: DeliveryScheduled_VC_DTO;
}
