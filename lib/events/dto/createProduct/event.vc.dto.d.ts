import { VerifiableCredentialDTO } from '../../../general/dto/verifiableCredential.dto';
import { CORE_CreationEventCredentialSubjectDTO } from './event.credentialSubject';
declare class CreationEventDetailsDTOBase {
    '@context': string[];
    id: string;
    type: string[];
    issuer: string;
    issuanceDate: Date;
    credentialSubject: CORE_CreationEventCredentialSubjectDTO;
    proof: VerifiableCredentialDTO;
}
export declare class CreationEventDetailsDTO extends CreationEventDetailsDTOBase {
}
export {};
