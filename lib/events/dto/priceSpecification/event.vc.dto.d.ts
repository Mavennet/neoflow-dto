import { ProofDTO } from '../../../general/dto/proof.dto';
import { PriceSpecificationCredentialSubjectDTO } from './event.credentialSubject.dto';
export declare class PriceSpecificationDetailsDTO {
    '@context': string[];
    id: string;
    type: string[];
    issuer: string;
    issuanceDate?: string | Date;
    credentialSubject: PriceSpecificationCredentialSubjectDTO;
    proof: ProofDTO;
}
