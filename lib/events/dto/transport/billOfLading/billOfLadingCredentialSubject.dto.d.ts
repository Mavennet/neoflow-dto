import { JSON_TYPE } from '../../../../general/constants';
import { DocumentDTO, ParcelDeliveryDTO } from '../../../../general/dto';
export declare class BillOfLadingCredentialSubjectDTO {
    type: JSON_TYPE[];
    billOfLadingNumber: string;
    relatedDocuments: DocumentDTO[];
    freight: ParcelDeliveryDTO;
}
