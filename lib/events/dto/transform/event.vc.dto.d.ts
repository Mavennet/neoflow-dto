import { ProofDTO } from '../../../general/dto/proof.dto';
import { AGENT_TransformationEventCredentialSubjectDTO, CORE_TransformationEventCredentialSubjectDTO } from './event.credentialSubject.dto';
declare class TransformationEventDetailsDTOBase {
    '@context': string[];
    id: string;
    type: string[];
    issuer: string;
    validFrom?: string | Date;
    proof: ProofDTO;
}
export declare class CORE_TransformationEventDetailsDTO extends TransformationEventDetailsDTOBase {
    credentialSubject: CORE_TransformationEventCredentialSubjectDTO;
}
export declare class AGENT_TransformationEventDetailsDTO extends TransformationEventDetailsDTOBase {
    credentialSubject: AGENT_TransformationEventCredentialSubjectDTO;
}
export {};
