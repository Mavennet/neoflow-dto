import { PricingStreams } from './pricingStreams.dto';
export declare class UpsertEstimatedValueDTO {
    id?: number;
    startDate: Date;
    endDate: Date;
    streams: PricingStreams[];
}
