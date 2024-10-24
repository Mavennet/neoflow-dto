import { TSCACertificationCredentialSubjectDTO } from './event.credentialSubject.dto';
import { EnvelopedVerifiableCredential } from '@mavennet/traceability-dto';
export declare class CORE_TSCACertificationDTO {
    gasShipmentId: string;
    eventId: string;
    eventVC: EnvelopedVerifiableCredential;
}
export declare class AGENT_TSCACertificationDTO {
    gasShipmentId: string;
    credentialSubject: TSCACertificationCredentialSubjectDTO;
}
