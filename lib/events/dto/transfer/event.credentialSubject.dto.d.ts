import { EVENT_TYPE } from '../../constants';
import { PlaceDTO, OrganizationDTO } from '../../../general';
import { ProductDTO } from '../../../products';
export declare class AGENT_TransferEventCredentialSubjectDTO {
    eventType: EVENT_TYPE;
    eventTime: string;
    place: PlaceDTO;
    product: ProductDTO;
    initiator: OrganizationDTO;
    receiver: OrganizationDTO;
    portOfEntry?: PlaceDTO;
    portOfDestination?: PlaceDTO;
    countryOfDestination?: string;
    receiptLocation?: PlaceDTO;
    price?: string;
}
export declare class CORE_TransferEventCredentialSubjectDTO extends AGENT_TransferEventCredentialSubjectDTO {
    '@context': string[];
    type: string[];
}
