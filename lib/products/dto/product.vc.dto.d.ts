import { VerifiableCredentialDTO } from '../../general';
import { ProductCredentialSubjectDTO } from './product.credentialSubject.dto';
export declare class ProductVCDTO extends VerifiableCredentialDTO {
    '@context': string[];
    type: string[];
    credentialSubject: ProductCredentialSubjectDTO;
}
