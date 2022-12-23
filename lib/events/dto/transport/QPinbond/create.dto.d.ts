import { QPInBondEventVCDTO } from './event.vc.dto';
import { QPInbondCredentialSubjectDTO } from '.';
export declare class CreateQPInbondDTOBase {
    productId: string;
    eventId: string;
}
export declare class CreateQPInbondDTO extends CreateQPInbondDTOBase {
    credentialSubject: QPInbondCredentialSubjectDTO;
}
export declare class CORE_CreateQPInbondDTO extends CreateQPInbondDTOBase {
    eventVC: QPInBondEventVCDTO;
}
