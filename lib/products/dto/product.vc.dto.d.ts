import { JSON_TYPE } from '../../general/constants';
import { VerifiableCredentialDTO } from '../../general/dto/verifiableCredential.dto';
import { ProductCredentialSubjectDTO } from './productCredentialSubject.dto';
declare class ProductVCDTOBase {
    '@context': string[];
    id: string;
    type: JSON_TYPE[];
    issuer: string;
    issuanceDate: string;
    credentialSubject: ProductCredentialSubjectDTO;
    proof: VerifiableCredentialDTO;
}
export declare class ProductVCDTO extends ProductVCDTOBase {
}
export {};
