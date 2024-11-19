import { CredentialDTO } from '../../credentials';
import { ProductCredentialSubjectDTO } from './productCredentialSubject.dto';
export declare class ProductVCDTO extends CredentialDTO<ProductCredentialSubjectDTO> {
    credentialSubject: ProductCredentialSubjectDTO;
}
