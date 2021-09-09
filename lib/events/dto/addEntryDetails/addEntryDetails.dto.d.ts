import { AddEntryDetailsVCDTO } from './event.vc.dto';
import { AGENT_AddEntryDetailsCredentialSubjectDTO } from './event.credentialSubject.dto';
import { COMPACT_PlaceDTO, COMPACT_OrganizationDTO, COMPACT_PostalAddressDTO } from '../../../general';
import { ProductBrief } from '../../../products';
export declare class AGENT_COMPACT_AddEntryDetailsDTO {
    transactionNumber: string;
    expectedDeliveryDate: string;
    portOfEntry: COMPACT_PlaceDTO;
    portOfDestination: COMPACT_PlaceDTO;
    carrier: COMPACT_OrganizationDTO;
    recipient: COMPACT_OrganizationDTO;
    originAddress: COMPACT_PostalAddressDTO;
    deliveryAddress: COMPACT_PostalAddressDTO;
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
