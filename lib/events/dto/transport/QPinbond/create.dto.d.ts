import { QPInbondCredentialSubjectDTO } from './credentialSubject.dto';
import { QPInBondEventVCDTO } from './event.vc.dto';
export declare class CreateQPInbondDTOBase {
    productId: string;
    eventId: string;
    txHash: string;
    txTimestamp: string;
}
export declare class CORE_CreateQPInbondDTO extends CreateQPInbondDTOBase {
    eventVC: QPInBondEventVCDTO;
    eventVCHash: string;
}
export declare class AGENT_CreateQPInbondDTO extends CreateQPInbondDTOBase {
    credentialSubject: QPInbondCredentialSubjectDTO;
}
