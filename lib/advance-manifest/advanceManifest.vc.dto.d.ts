import { CredentialDTO } from '../credentials';
import { AdvanceManifestCredentialSubjectDTO } from './advanceManifest.credentialSubject.dto';
export declare class AdvanceManifestVCDTO extends CredentialDTO<AdvanceManifestCredentialSubjectDTO> {
    credentialSubject: AdvanceManifestCredentialSubjectDTO;
}
