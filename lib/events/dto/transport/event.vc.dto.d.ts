import { VerifiableCredentialDTO, JSON_TYPE } from '../../../general';
import { CORE_TransportEventCredentialSubjectDTO, CORE_BillOfLadingCredentialSubjectDTO } from './event.credentialSubject.dto';
export declare class TransportEventVCDTO extends VerifiableCredentialDTO {
    '@context': string[];
    type: JSON_TYPE[];
    credentialSubject: CORE_TransportEventCredentialSubjectDTO;
}
export declare class BillOfLadingVCDTO extends VerifiableCredentialDTO {
    '@context': string[];
    type: JSON_TYPE[];
    credentialSubject: CORE_BillOfLadingCredentialSubjectDTO;
}
