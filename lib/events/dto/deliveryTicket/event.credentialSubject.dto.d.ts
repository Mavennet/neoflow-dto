import { OrganizationDTO, PlaceDTO, ObservationDTO, JSON_TYPE } from '../../../general';
import { ProductDTO } from '../../../products';
export declare class DeliveryTicketCredentialSubjectDTO {
    type: JSON_TYPE[];
    createdDate: string | Date;
    openDate: string | Date;
    closeDate: string | Date;
    carrier: OrganizationDTO;
    consignor: OrganizationDTO;
    consignee: OrganizationDTO;
    ticketControlNumber: string;
    batchNumber: string;
    nosMonth: string;
    destination: PlaceDTO;
    product: ProductDTO;
    observation: ObservationDTO[];
}
