import { JSON_TYPE_NF, ObservationDTO, OrganizationDTO, PlaceDTO } from '../../../general';
import { ProductDTO } from '../../../products';
export declare class DeliveryStatementCredentialSubjectDTO {
    type: JSON_TYPE_NF.DELIVERY_STATEMENT;
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
