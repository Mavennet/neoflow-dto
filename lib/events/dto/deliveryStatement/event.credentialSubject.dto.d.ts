import { OrganizationDTO, PlaceDTO, ObservationDTO, JSON_TYPE, JSON_TYPE_NF } from '../../../general';
import { ProductDTO } from '../../../products';
export declare class DeliveryStatementCredentialSubjectDTO {
    type: Array<JSON_TYPE | JSON_TYPE_NF>;
    createdDate: string | Date;
    openDate?: string | Date;
    closeDate?: string | Date;
    carrier: OrganizationDTO;
    consignor: OrganizationDTO;
    consignee?: OrganizationDTO;
    StatementControlNumber?: string;
    batchNumber?: string;
    notificationOfShipment?: string;
    destination: PlaceDTO;
    product?: ProductDTO;
    observation: ObservationDTO[];
}
