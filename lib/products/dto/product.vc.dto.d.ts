import { JSON_TYPE } from '../../general/constants';
import { ProofDTO } from '../../general/dto/proof.dto';
import { ProductCredentialSubjectDTO } from './productCredentialSubject.dto';
declare class ProductVCDTOBase {
    '@context': string[];
    id: string;
    type: JSON_TYPE[];
    issuer: string;
    issuanceDate?: string | Date;
    credentialSubject: ProductCredentialSubjectDTO;
    proof: ProofDTO;
}
export declare class ProductVCDTO extends ProductVCDTOBase {
}
export {};
