import { JSON_TYPE } from '../../general/constants';
import { VerifiableCredentialDTO } from '../../general/dto/verifiableCredential.dto';
import { ProductCredentialSubjectDTO } from './productCredentialSubject.dto';
export declare class ProductVCDTO {
    '@context': string[];
    id: string;
    type: JSON_TYPE[];
    issuer: string;
    issuanceDate: Date;
    credentialSubject: ProductCredentialSubjectDTO;
    proof: VerifiableCredentialDTO;
}
