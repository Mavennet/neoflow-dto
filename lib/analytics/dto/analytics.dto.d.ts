import { AnalyticsDTO as AnalyticsDTOBase } from '@mavennet/traceability-dto';
export declare class AnalyticsDTO extends AnalyticsDTOBase {
    entryId?: string;
    eventType?: string;
    eventCreatedAt?: Date;
    productCreatedAt: Date;
    productionMonth: string;
    startTransportMonth?: string;
    buyerName: string;
    refineryName?: string;
    ftzNo?: string;
    origin: string;
    portOfEntry?: string;
    streamType: string;
    aging?: string;
    sulphur?: number;
    density?: number;
    tan?: number;
    price?: number;
    volume: number;
}
