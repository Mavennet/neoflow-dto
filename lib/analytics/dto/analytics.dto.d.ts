import { AnalyticsDTO as AnalyticsDTOBase } from 'mavennet-dto';
export declare class AnalyticsDTO extends AnalyticsDTOBase {
    productId: string;
    entryId?: string;
    eventType?: string;
    eventCreatedAt?: Date;
    productCreatedAt: Date;
    productionMonth: string;
    startTransportMonth?: string;
    buyerName: string;
    refineryName?: string;
    qpInBond?: string;
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
    currentMillis: number;
}
