import { KEY_TYPES, PROOF_PURPOSE_TYPE } from '../../general';
import { CredentialStatusDTO } from './';
export declare class CredentialOptionsDTO {
    proofPurpose?: PROOF_PURPOSE_TYPE.ASSERTION_METHOD;
    assertionMethod?: string;
    issuer?: string;
    verificationMethod?: string;
    created?: string;
    challenge?: string;
    domain?: string;
    credentialStatus?: CredentialStatusDTO;
    type: KEY_TYPES;
}
