import { PlaceDTO } from '../../../general';
export declare class TransferOwnershipRequestDTO {
    productId: string;
    contractId?: number;
    receiver: string;
    price: number;
    portOfEntry: PlaceDTO;
    portOfDestination: PlaceDTO;
    countryOfDestination: string;
    hasDocuments: boolean;
}
