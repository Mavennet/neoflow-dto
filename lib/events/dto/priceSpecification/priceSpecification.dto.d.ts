import { PriceSpecificationCredentialSubjectDTO } from './event.credentialSubject.dto';
import { EnvelopedVerifiableCredential } from '@mavennet/traceability-dto';
export declare class CORE_PriceSpecificationDTO {
    gasShipmentId: string;
    eventId: string;
    eventVC: EnvelopedVerifiableCredential;
}
export declare class AGENT_PriceSpecificationDTO {
    gasShipmentId: string;
    credentialSubject: PriceSpecificationCredentialSubjectDTO;
}
