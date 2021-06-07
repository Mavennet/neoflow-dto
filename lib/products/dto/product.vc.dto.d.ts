import { JSON_TYPE, JSON_TYPE_METAL, VerifiableCredentialDTO } from '../../general';
import { ProductCredentialSubjectDTO } from './product.credentialSubject.dto';
export declare class ProductVCDTO extends VerifiableCredentialDTO {
    '@context': string[];
    type: Array<JSON_TYPE | JSON_TYPE_METAL>;
    id: string;
    credentialSubject: ProductCredentialSubjectDTO;
}
