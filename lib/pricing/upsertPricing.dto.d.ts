import { PricingStreams } from './pricingStreams.dto';
import { PRICING_STATUS } from './constants';
export declare class UpsertPricingDTO {
    id?: number;
    startDate?: Date;
    endDate?: Date;
    streams?: PricingStreams[];
    status: PRICING_STATUS;
}
