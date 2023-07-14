import { JSON_TYPE, JSON_TYPE_NF, type MeasurementDTO } from '../general';
export declare class AdvanceManifestCredentialSubjectDTO {
    type: Array<JSON_TYPE | JSON_TYPE_NF>;
    date: string;
    scheduledDeliveries?: Array<{
        portCode: string;
        deliveryLocation: string;
        sumOfScheduledDeliveries: MeasurementDTO[];
        numberOfBatches: string;
    }>;
}
