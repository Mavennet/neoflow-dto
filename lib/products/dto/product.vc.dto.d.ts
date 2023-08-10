import { VerifiableCredentialDTO } from '@mavennet/traceability-dto';
import { ProductCredentialSubjectDTO } from './productCredentialSubject.dto';
export declare class ProductVCDTO extends VerifiableCredentialDTO implements Omit<VerifiableCredentialDTO, 'credentialSubject'> {
    credentialSubject: ProductCredentialSubjectDTO;
}
