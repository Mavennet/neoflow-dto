import { AnalyticsDTO as AnalyticsDTOBase } from 'mavennet-dto';
export declare class AnalyticsDTO extends AnalyticsDTOBase {
    eventCreatedAt: Date;
    eventType: string;
    productCreatedAt: Date;
    productionMonth: string;
    buyerName: string;
    origin: string;
    price?: number;
    volume: number;
    aging?: string;
    qpInBond?: string;
    entryId?: string;
    ftzNo?: string;
    portOfEntry?: string;
    streamType: string;
    startTransportMonth?: string;
    refineryName?: string;
    sulphur?: number;
    density?: number;
    tan?: number;
}
