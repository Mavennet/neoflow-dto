import { AddEntryDetailsVCDTO } from './event.vc.dto';
import { AGENT_AddEntryDetailsCredentialSubjectDTO } from './event.credentialSubject.dto';
import { FLAT_PlaceDTO, FLAT_OrganizationDTO, FLAT_PostalAddressDTO } from '../../../general';
import { ProductBrief } from '../../../products';
export declare class AGENT_FLAT_AddEntryDetailsDTO {
    transactionNumber: string;
    expectedDeliveryDate: string;
    portOfEntry: FLAT_PlaceDTO;
    portOfDestination: FLAT_PlaceDTO;
    carrier: FLAT_OrganizationDTO;
    recipient: FLAT_OrganizationDTO;
    originAddress: FLAT_PostalAddressDTO;
    deliveryAddress: FLAT_PostalAddressDTO;
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
