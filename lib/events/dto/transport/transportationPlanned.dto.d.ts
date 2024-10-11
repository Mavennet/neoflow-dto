import { PlaceDTO } from '../../../general';
import { JSON_TYPE } from '../../../general/constants';
import { ProofDTO } from '../../../general/dto';
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
export declare class TransportationPlanned_VC_DTO {
    '@context': string[];
    id: string;
    type: JSON_TYPE[];
    issuer: string;
    credentialSubject: AGENT_TransportationPlannedDTO;
    validFrom?: string | Date;
    proof: ProofDTO;
}
export declare class CORE_TransportationPlannedDTO {
    productId: string;
    eventId: string;
    eventVC: TransportationPlanned_VC_DTO;
}
