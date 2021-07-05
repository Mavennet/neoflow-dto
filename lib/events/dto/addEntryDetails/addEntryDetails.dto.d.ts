import { AddEntryDetailsVCDTO } from './event.vc.dto';
import { AGENT_AddEntryDetailsCredentialSubjectDTO } from './event.credentialSubject.dto';
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
