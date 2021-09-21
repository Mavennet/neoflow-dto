import { QPInbondCredentialSubjectDto } from '../../events/dto';
import { QPInBondEventVCDTO } from '../../events/dto/qpInBondEvent.vc.dto';
export declare class CreateQPInbondDTO {
    productId: string;
    eventId: string;
    credentialSubject: QPInbondCredentialSubjectDto;
    eventVC: QPInBondEventVCDTO;
    eventVCHash: string;
    txHash: string;
    txTimestamp: string;
}
