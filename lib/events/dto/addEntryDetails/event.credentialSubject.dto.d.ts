import { PlaceDTO, OrganizationDTO } from '../../../general';
import { ProductDTO } from '../../../products';
import { ParcelDeliveryDTO } from 'mavennet-dto';
export declare class AGENT_AddEntryDetailsCredentialSubjectDTO {
    eventId: string;
    productId: string;
    eventTime: Date;
    type: string[];
    portOfEntry: PlaceDTO;
    carrier: OrganizationDTO;
    recipient: OrganizationDTO;
    portOfDestination: PlaceDTO;
    shipment: ParcelDeliveryDTO;
    transactionNumber: string;
    expectedDeliveryDate: Date;
    valuePerItem: string;
    totalOrderValue: string;
    product: ProductDTO;
}
export declare class CORE_AddEntryDetailsCredentialSubjectDTO extends AGENT_AddEntryDetailsCredentialSubjectDTO {
    '@context': string[];
    eventId: string;
    productId: string;
}
