import { PROOF_PURPOSE_TYPE, KEY_TYPES } from '../constants';
export declare abstract class ProofDTO {
    type: KEY_TYPES;
    created: Date;
    proofPurpose?: PROOF_PURPOSE_TYPE;
    proofValue: string;
    jws: string;
    verificationMethod?: string;
    challenge?: string;
    domain?: string;
}
