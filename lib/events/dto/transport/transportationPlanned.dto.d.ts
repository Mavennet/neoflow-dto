import { PlaceDTO } from '../../../general';
export declare class TransportationPlannedDTO {
    productId: string;
    receiver: string;
    portOfEntry?: PlaceDTO;
    portOfArrival?: PlaceDTO;
    portOfDestination?: PlaceDTO;
    countryOfDestination?: string;
    receiptLocation?: PlaceDTO;
    scheduledDate: string;
    hasDocuments: boolean;
}
