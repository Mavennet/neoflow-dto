import { ProductCredentialSubjectDTO } from './product.credentialSubject.dto';
import { VerifiableCredentialDTO } from 'mavennet-dto';
export declare class ProductVCDTO extends VerifiableCredentialDTO {
    '@context': string[];
    type: string[];
    credentialSubject: ProductCredentialSubjectDTO;
}
