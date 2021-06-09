import { VerifiableCredentialDTO, JSON_TYPE } from '../../../general';
import { CORE_TransformEventCredentialSubjectDTO } from './event.credentialSubject.dto';
export declare class TransformEventVCDTO extends VerifiableCredentialDTO {
    '@context': string[];
    type: JSON_TYPE[];
    id: string;
    credentialSubject: CORE_TransformEventCredentialSubjectDTO;
}
