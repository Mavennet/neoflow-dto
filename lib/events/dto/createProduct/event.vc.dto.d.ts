import { ProofDTO } from '../../../general/dto/proof.dto';
import { CORE_CreationEventCredentialSubjectDTO } from './event.credentialSubject';
declare class CreationEventDetailsDTOBase {
    '@context': string[];
    id: string;
    type: string[];
    issuer: string;
    issuanceDate?: string | Date;
    credentialSubject: CORE_CreationEventCredentialSubjectDTO;
    proof: ProofDTO;
}
export declare class CreationEventDetailsDTO extends CreationEventDetailsDTOBase {
}
export {};
