import { CredentialDTO } from '../../../credentials';
import { PlaceDTO } from '../../../general';
export declare class AGENT_TransportationPlannedDTO {
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
export declare class TransportationPlanned_VC_DTO extends CredentialDTO<AGENT_TransportationPlannedDTO> {
    credentialSubject: AGENT_TransportationPlannedDTO;
}
export declare class CORE_TransportationPlannedDTO {
    productId: string;
    eventId: string;
    eventVC: TransportationPlanned_VC_DTO;
}
