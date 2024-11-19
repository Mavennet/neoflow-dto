import { ProofDTO } from '../../general';
import { EnvelopedVerifiableCredential } from '../../credentials';
import { WorkflowDTO } from './workflow.dto';
export declare class TraceablePresentationDTO {
    '@context': string[];
    id: string;
    type: string[];
    holder?: string;
    verifiableCredential: EnvelopedVerifiableCredential[];
    workflow: WorkflowDTO;
    proof?: ProofDTO;
}
