import { PROOF_PURPOSE_TYPE } from '../../general';
export declare class PresentationOptionsDTO {
    proofPurpose?: PROOF_PURPOSE_TYPE.AUTHENTICATION;
    verificationMethod?: string;
    created?: string;
    challenge?: string;
    domain?: string;
    type?: string;
}
