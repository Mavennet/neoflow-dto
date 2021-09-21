import { ProductCredentialSubjectDTO } from './productCredentialSubject.dto';
import { ProductVCDTO } from './product.vc.dto';
export declare class TransformProductSuccessorDTO {
    productId: string;
    productVC: ProductVCDTO;
    productVCHash: string;
    identifier: string;
    credentialSubjects: ProductCredentialSubjectDTO;
}
