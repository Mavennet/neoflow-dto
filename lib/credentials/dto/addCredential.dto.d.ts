import { ProofDTO } from '../../general';
export declare class AddCredentialDTO {
    id: string;
    '@context': string[];
    type: string[];
    issuer: string;
    proof: ProofDTO;
    credentialSubject: JSON;
    credentialStatus?: JSON;
}
