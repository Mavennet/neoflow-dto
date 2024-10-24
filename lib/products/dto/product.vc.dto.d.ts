import { VerifiableCredentialDTO } from '@mavennet/traceability-dto';
import { ProductCredentialSubjectDTO } from './productCredentialSubject.dto';
export declare class ProductVCDTO extends VerifiableCredentialDTO<ProductCredentialSubjectDTO> {
    credentialSubject: ProductCredentialSubjectDTO;
}
