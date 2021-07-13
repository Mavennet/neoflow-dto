import { VerifiableCredentialDTO, JSON_TYPE } from '../../../general';
import { CORE_MillTestCredentialSubjectDTO } from './event.credentialSubject.dto';
export declare class MillTestVCDTO extends VerifiableCredentialDTO {
    '@context': string[];
    type: JSON_TYPE[];
    id: string;
    credentialSubject: CORE_MillTestCredentialSubjectDTO;
}
