import { CredentialDTO } from '@mavennet/traceability-dto';
import { ProductCredentialSubjectDTO } from './productCredentialSubject.dto';
export declare class ProductVCDTO extends CredentialDTO<ProductCredentialSubjectDTO> {
    credentialSubject: ProductCredentialSubjectDTO;
}
