import { ProofDTO } from '../general/dto/proof.dto';
import { AdvanceManifestCredentialSubjectDTO } from './advanceManifest.credentialSubject.dto';
export declare class AdvanceManifestVCDTO {
    '@context': string[];
    id: string;
    type: string[];
    issuanceDate?: string | Date;
    credentialSubject: AdvanceManifestCredentialSubjectDTO;
    proof: ProofDTO;
}
