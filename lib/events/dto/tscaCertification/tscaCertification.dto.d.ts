import { TSCACertificationCredentialSubjectDTO } from './event.credentialSubject.dto';
import { TSCACertificationDetailsDTO } from './event.vc.dto';
export declare class CORE_TSCACertificationDTO {
    gasShipmentId: string;
    eventId: string;
    eventVC: TSCACertificationDetailsDTO;
}
export declare class AGENT_TSCACertificationDTO {
    gasShipmentId: string;
    credentialSubject: TSCACertificationCredentialSubjectDTO;
}
