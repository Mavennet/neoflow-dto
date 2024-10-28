import { JSON_TYPE, JSON_TYPE_NF, type MeasurementDTO, type OrganizationDTO, type PlaceDTO } from '../general';
export declare class AdvanceManifestCredentialSubjectDTO {
    type: Array<JSON_TYPE | JSON_TYPE_NF>;
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
