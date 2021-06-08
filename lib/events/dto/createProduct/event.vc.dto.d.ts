import { VerifiableCredentialDTO, JSON_TYPE, JSON_TYPE_METAL } from '../../../general';
import { CORE_EventCreateCredentialSubjectDTO } from './event.credentialSubject.dto';
export declare class EventCreateVCDTO extends VerifiableCredentialDTO {
    '@context': string[];
    type: Array<JSON_TYPE | JSON_TYPE_METAL>;
    id: string;
    credentialSubject: CORE_EventCreateCredentialSubjectDTO;
}
