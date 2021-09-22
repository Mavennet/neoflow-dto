export declare class CredentialOptionsDTO {
    proofPurpose?: 'assertionMethod' | 'authentication';
    assertionMethod?: string;
    issuanceDate?: string;
    issuer?: string;
    verificationMethod?: string;
    created?: string;
    challenge?: string;
    domain?: string;
    credentialStatus?: any;
}
