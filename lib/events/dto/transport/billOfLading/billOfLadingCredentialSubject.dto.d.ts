import { JSON_TYPE } from '../../../../general/constants';
import { DocumentDTO, ParcelDeliveryDTO } from '../../../../general/dto';
declare class BillOfLadingCredentialSubjectDTOBase {
    type: JSON_TYPE[];
    billOfLadingNumber: string;
    relatedDocuments: DocumentDTO[];
    freight: ParcelDeliveryDTO;
}
export declare class BillOfLadingCredentialSubjectDTO extends BillOfLadingCredentialSubjectDTOBase {
}
export {};
