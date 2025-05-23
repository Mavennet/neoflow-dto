import { PricingStreams } from './pricingStreams.dto';
import { PRICING_STATUS } from './constants';
export declare class UpsertPricingDTO {
    id?: string;
    startDate: Date;
    endDate: Date;
    streams: PricingStreams[];
    status: PRICING_STATUS;
}
