import { VerifiableCredentialDTO } from '../../../general';
import { CORE_EventCreateCredentialSubjectDTO } from './event.credentialSubject.dto';
export declare class EventCreateVCDTO extends VerifiableCredentialDTO {
    '@context': string[];
    type: any;
    credentialSubject: CORE_EventCreateCredentialSubjectDTO;
}
