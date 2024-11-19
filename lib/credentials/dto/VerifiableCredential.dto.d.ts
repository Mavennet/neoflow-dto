import { ProofDTO } from '../../general/dto';
import { CredentialDTO } from './credential.dto';
export declare class VerifiableCredentialDTO<T> extends CredentialDTO<T> {
    proof?: ProofDTO;
    credentialSubject: T;
}
