import { JSON_TYPE_NF, type MeasurementDTO, type PlaceDTO, type OrganizationDTO } from '../general';
export declare class AdvanceManifestCredentialSubjectDTO {
    type: JSON_TYPE_NF.MONTHLY_ADVANCE_MANIFEST;
    date: string;
    scheduledDeliveries?: Array<{
        portCode: string;
        portOfArrival: PlaceDTO;
        portOfDestination: PlaceDTO;
        transporter: OrganizationDTO;
        deliveryLocation: string;
        receiptLocation: string;
        sumOfScheduledDeliveries: MeasurementDTO[];
        numberOfBatches: string;
        countOfShippers: number;
    }>;
}
