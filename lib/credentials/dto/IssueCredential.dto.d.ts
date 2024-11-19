import { CredentialDTO } from './credential.dto';
import { CredentialOptionsDTO } from './credentialOptions.dto';
export declare class IssueCredentialDTO {
    credential: CredentialDTO<any>;
    options?: CredentialOptionsDTO;
}
