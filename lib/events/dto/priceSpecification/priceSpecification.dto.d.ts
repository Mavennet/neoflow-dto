import { PriceSpecificationCredentialSubjectDTO } from './event.credentialSubject.dto';
import { PriceSpecificationDetailsDTO } from './event.vc.dto';
export declare class CORE_PriceSpecificationDTO {
    gasShipmentId: string;
    eventId: string;
    eventVC: PriceSpecificationDetailsDTO;
}
export declare class AGENT_PriceSpecificationDTO {
    gasShipmentId: string;
    credentialSubject: PriceSpecificationCredentialSubjectDTO;
}
