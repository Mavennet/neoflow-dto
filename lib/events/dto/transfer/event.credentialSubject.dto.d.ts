import { TRANSFER_EVENT_TYPE } from '../../constants';
import { PlaceDTO, OrganizationDTO } from '../../../general';
export declare class AGENT_TransferEventCredentialSubjectDTO {
    place: PlaceDTO;
    products: string[];
    actor: OrganizationDTO[];
    initiator?: string;
    receiver: string;
    price?: string;
    portOfArrival?: PlaceDTO;
    portOfEntry?: PlaceDTO;
    portOfDestination?: PlaceDTO;
    receiptLocation?: PlaceDTO;
    countryOfDestination?: string;
}
export declare class CORE_TransferEventCredentialSubjectDTO extends AGENT_TransferEventCredentialSubjectDTO {
    type: string[];
    eventType: TRANSFER_EVENT_TYPE;
    eventId: string;
    eventTime: string;
}
