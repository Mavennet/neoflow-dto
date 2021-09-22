import { QPInbondCredentialSubjectDto } from './qpInbondCredentialSubject.dto';
import { QPInBondEventVCDTO } from './qpInBondEvent.vc.dto';
export declare class CreateQPInbondDTO {
    productId: string;
    eventId: string;
    credentialSubject: QPInbondCredentialSubjectDto;
    eventVC: QPInBondEventVCDTO;
    eventVCHash: string;
    txHash: string;
    txTimestamp: string;
}
