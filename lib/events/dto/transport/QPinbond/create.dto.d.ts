import { QPInBondEventVCDTO } from './event.vc.dto';
import { QPInbondCredentialSubjectDTO } from '.';
export declare class CreateQPInbondDTO {
    productId: string;
    eventId: string;
    eventVC: QPInBondEventVCDTO;
    credentialSubject: QPInbondCredentialSubjectDTO;
}
