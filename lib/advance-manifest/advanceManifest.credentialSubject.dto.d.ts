import { JSON_TYPE, JSON_TYPE_NF } from '../general';
export declare class AdvanceManifestCredentialSubjectDTO {
    type: Array<JSON_TYPE | JSON_TYPE_NF>;
    date: string;
    scheduledDeliveries?: Array<{
        portCode: string;
        deliveryLocation: string;
        sumOfScheduledDeliveries: string;
        numberOfBatches: string;
    }>;
}
