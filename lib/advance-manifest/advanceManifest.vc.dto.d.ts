import { AdvanceManifestCredentialSubjectDTO } from './advanceManifest.credentialSubject.dto';
export declare class AdvanceManifestVCDTO {
    '@context': string[];
    id: string;
    type: string[];
    validFrom?: string | Date;
    credentialSubject: AdvanceManifestCredentialSubjectDTO;
}
