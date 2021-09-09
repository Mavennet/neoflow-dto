import { AddEntryDetailsVCDTO } from './event.vc.dto';
import { AGENT_AddEntryDetailsCredentialSubjectDTO } from './event.credentialSubject.dto';
import { Place, Organization, PostalAddress } from '../../../general';
import { ProductBrief } from '../../../products';
export declare class AddEntryDetails {
    transactionNumber: string;
    expectedDeliveryDate: string;
    portOfEntry: Place;
    portOfDestination: Place;
    carrier: Organization;
    recipient: Organization;
    originAddress: PostalAddress;
    deliveryAddress: PostalAddress;
    valuePerItem: string;
    totalOrderValue: string;
    product: ProductBrief;
}
export declare class AGENT_AddEntryDetailsDTO {
    productId: string;
    eventId: string;
    addEntryDetailsCredentialSubject: AGENT_AddEntryDetailsCredentialSubjectDTO;
}
export declare class CORE_AddEntryDetailsDTO {
    productId: string;
    eventId: string;
    addEntryDetailsVC: AddEntryDetailsVCDTO;
    eventVCHash: string;
    txHash: string;
    txTimestamp: string;
}
