declare class PricingStreams {
    streamType: string;
    estimatedValue: number;
}
export declare class upsertEstimatedValueDTO {
    startDate: Date;
    endDate: Date;
    streams: PricingStreams[];
}
export {};
