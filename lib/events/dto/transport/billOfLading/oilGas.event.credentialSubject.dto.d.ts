import { JSON_TYPE_NF } from '../../../../general/constants';
import { MeasurementDTO, ObservationDTO } from '../../../../general/dto';
import { BillOfLadingCredentialSubjectDTO } from './event.credentialSubject.dto';
export declare class OGBillOfLadingCredentialSubjectDTO {
    type: JSON_TYPE_NF.OG_BILL_OF_LADING;
    billOfLading: BillOfLadingCredentialSubjectDTO;
    shippingDate: string;
    arrivalDate: string;
    valuePerItem?: string;
    totalOrderValue?: string;
    freightChargeTerms?: string;
    batchNumber?: string;
    openingVolume: MeasurementDTO;
    closingVolume: MeasurementDTO;
    observation: ObservationDTO[];
}
