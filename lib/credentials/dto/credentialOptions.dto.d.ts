import { CredentialOptionsDTO as CredentialOptionsDTOBase } from '@mavennet/traceability-dto';
export declare class CredentialOptionsDTO extends CredentialOptionsDTOBase {
    assertionMethod?: string;
    issuanceDate?: string;
    challenge?: string;
    domain?: string;
}
