import { JSON_TYPE_NF, ObservationDTO, OrganizationDTO, PlaceDTO } from '../../../general';
import { ProductDTO } from '../../../products';
export declare class DeliveryTicketCredentialSubjectDTO {
    type: JSON_TYPE_NF[];
    createdDate: string | Date;
    openDate?: string | Date;
    closeDate?: string | Date;
    carrier: OrganizationDTO;
    consignor: OrganizationDTO;
    consignee?: OrganizationDTO;
    ticketControlNumber?: string;
    batchNumber?: string;
    notificationOfShipment?: string;
    nominationMonth?: string;
    destination: PlaceDTO;
    product?: ProductDTO;
    observation: ObservationDTO[];
    carrierCode?: string;
}
