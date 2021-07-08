import { PlaceDTO, OrganizationDTO } from '../../../general';
import { ProductDTO } from '../../../products';
import { ParcelDeliveryDTO } from 'mavennet-dto';
export declare class AGENT_AddEntryDetailsCredentialSubjectDTO {
    eventId: string;
    productId: string;
    type: string[];
    transactionNumber: string;
}
export declare class CORE_AddEntryDetailsCredentialSubjectDTO extends AGENT_AddEntryDetailsCredentialSubjectDTO {
    '@context': string[];
    eventTime: string;
    portOfEntry: PlaceDTO;
    carrier: OrganizationDTO;
    recipient: OrganizationDTO;
    portOfDestination: PlaceDTO;
    shipment: ParcelDeliveryDTO;
    expectedDeliveryDate: string;
    valuePerItem: string;
    totalOrderValue: string;
    product: ProductDTO;
}
