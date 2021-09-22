import { ProductCredentialSubjectDTO } from '../../../products/dto/productCredentialSubject.dto';
import { ProductVCDTO } from '../../../products/dto/product.vc.dto';
export declare class TransformProductSuccessorDTO {
    productId: string;
    productVC: ProductVCDTO;
    productVCHash: string;
    identifier: string;
    credentialSubjects: ProductCredentialSubjectDTO;
}
