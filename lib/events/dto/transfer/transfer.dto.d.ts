import { TransferEventVCDTO } from './event.vc.dto';
import { AGENT_TransferEventCredentialSubjectDTO } from './event.credentialSubject.dto';
export declare class AGENT_TransferDTO {
    requestId: number;
    productId: string;
    eventId: string;
    eventCredentialSubject: AGENT_TransferEventCredentialSubjectDTO;
}
export declare class CORE_TransferDTO {
    requestId: number;
    productId: string;
    eventId: string;
    eventVCHash: string;
    txHash: string;
    txTimestamp: string;
    eventVC: TransferEventVCDTO;
}
