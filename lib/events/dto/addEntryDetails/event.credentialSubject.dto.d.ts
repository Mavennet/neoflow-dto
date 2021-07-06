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
    eventTime: Date;
    portOfEntry: PlaceDTO;
    carrier: OrganizationDTO;
    recipient: OrganizationDTO;
    portOfDestination: PlaceDTO;
    shipment: ParcelDeliveryDTO;
    expectedDeliveryDate: Date;
    valuePerItem: string;
    totalOrderValue: string;
    product: ProductDTO;
}
