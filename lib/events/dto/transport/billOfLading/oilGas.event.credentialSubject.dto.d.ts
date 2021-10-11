import { BillOfLadingCredentialSubjectDTO } from './event.credentialSubject.dto';
import { ObservationDTO } from '../../../../general/dto';
import { JSON_TYPE } from '../../../../general/constants';
export declare class OGBillOfLadingCredentialSubjectDTO {
    type: JSON_TYPE[];
    billOfLading: BillOfLadingCredentialSubjectDTO;
    shippingDate: string;
    arrivalDate: string;
    valuePerItem: string;
    totalOrderValue: string;
    freightChargeTerms: string;
    batchNumber: string;
    openingVolume: string;
    closingVolume: string;
    observation: ObservationDTO[];
}
