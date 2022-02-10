import { QPInbondCredentialSubjectDTO } from './credentialSubject.dto';
import { QPInBondEventVCDTO } from './event.vc.dto';
export declare class CreateQPInbondDTO {
    productId: string;
    eventId: string;
    credentialSubject: QPInbondCredentialSubjectDTO;
    eventVC: QPInBondEventVCDTO;
    eventVCHash: string;
}
