import { EVENT_TYPE } from './entities/Event.entity';
export declare class EventDetailsDTO {
    identifier: string;
    eventName: EVENT_TYPE;
    timestamp: string;
    latitude: string;
    longitude: string;
    address: string;
    volume: number;
    price: number;
    transportType: string;
    batchNo: string;
    scn: string;
    bol: string;
    deliveryTicketId: string;
    txHash: string;
    eventSubmitter: string;
    recipient: string;
}
