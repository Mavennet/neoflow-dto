import { VerifiableCredentialDTO } from '../../../general';
import { CORE_EventCreateCredentialSubjectDTO } from './eventCreate.credentialSubject.dto';
export declare class EventCreateVCDTO extends VerifiableCredentialDTO {
    '@context': string[];
    type: string[];
    credentialSubject: CORE_EventCreateCredentialSubjectDTO;
}
