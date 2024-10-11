import { ProofDTO } from '../../../general/dto/proof.dto';
import { TSCACertificationCredentialSubjectDTO } from './event.credentialSubject.dto';
export declare class TSCACertificationDetailsDTO {
    '@context': string[];
    id: string;
    type: string[];
    issuer?: string;
    validFrom?: string | Date;
    credentialSubject: TSCACertificationCredentialSubjectDTO;
    proof: ProofDTO;
}
