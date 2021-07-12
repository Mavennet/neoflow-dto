import { VerifiableCredentialDTO, JSON_TYPE } from '../../../general';
import { CORE_InspectCredentialSubjectDTO } from './event.credentialSubject.dto';
export declare class InspectVCDTO extends VerifiableCredentialDTO {
    '@context': string[];
    type: JSON_TYPE[];
    credentialSubject: CORE_InspectCredentialSubjectDTO;
}
