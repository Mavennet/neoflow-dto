import { QPInbondCredentialSubjectDTO } from './qpInbondCredentialSubject.dto';
import { QPInBondEventVCDTO } from './qpInBondEvent.vc.dto';
export declare class CreateQPInbondDTO {
    productId: string;
    eventId: string;
    credentialSubject: QPInbondCredentialSubjectDTO;
    eventVC: QPInBondEventVCDTO;
    eventVCHash: string;
    txHash: string;
    txTimestamp: string;
}
