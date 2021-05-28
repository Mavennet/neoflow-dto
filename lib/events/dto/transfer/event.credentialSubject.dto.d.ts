import { EVENT_TYPE, PlaceDTO, OrganizationDTO } from '../../../general';
import { ProductDTO } from '../../../products';
export declare class TransferEventCredentialSubjectDTO {
    '@context': string[];
    type: string[];
    eventType: EVENT_TYPE;
    eventTime: Date;
    place: PlaceDTO;
    product: ProductDTO;
    initiator: OrganizationDTO;
    receiver: OrganizationDTO;
    portOfEntry: PlaceDTO;
    portOfArrival: PlaceDTO;
    portOfDestination: PlaceDTO;
    countryOfDestination: string;
    recipientLocation: PlaceDTO;
    price: number;
}
