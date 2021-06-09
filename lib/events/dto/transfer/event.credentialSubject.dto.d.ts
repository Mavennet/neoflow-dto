import { AddressDTO, EVENT_TYPE, PlaceDTO, OrganizationDTO } from '../../../general';
import { ProductDTO } from '../../../products';
export declare class AGENT_TransferEventCredentialSubjectDTO {
    eventType: EVENT_TYPE;
    eventTime: string;
    place: PlaceDTO;
    product: ProductDTO;
    initiator: OrganizationDTO;
    receiver: OrganizationDTO;
    portOfEntry: AddressDTO;
    portOfDestination: AddressDTO;
    countryOfDestination: string;
    receiptLocation?: AddressDTO;
    price?: string;
}
export declare class CORE_TransferEventCredentialSubjectDTO extends AGENT_TransferEventCredentialSubjectDTO {
    '@context': string[];
    type: string[];
}
