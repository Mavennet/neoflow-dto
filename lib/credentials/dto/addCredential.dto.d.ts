import { IssuerDTO, ProofDTO } from '../../general';
export declare class AddCredentialDTO {
    id: string;
    '@context': string[];
    type: string[];
    issuer: IssuerDTO;
    proof: ProofDTO;
    credentialSubject: JSON;
    credentialStatus?: JSON;
}
