declare class PricingStreams {
    streamType: string;
    estimatedValue: number;
}
export declare class UpsertEstimatedValueDTO {
    startDate: Date;
    endDate: Date;
    streams: PricingStreams[];
}
export {};
