import { VerifiableCredentialDTO } from '../../general';
import { EventCreateCredentialSubjectDTO } from './eventCreate.credentialSubject.dto';
export declare class EventCreateVCDTO extends VerifiableCredentialDTO {
    '@context': string[];
    type: string[];
    credentialSubject: EventCreateCredentialSubjectDTO;
}
