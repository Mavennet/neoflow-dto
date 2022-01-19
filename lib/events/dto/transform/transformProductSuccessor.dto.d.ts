import { ProductCredentialSubjectDTO } from '../../../products/dto/productCredentialSubject.dto';
import { ProductVCDTO } from '../../../products/dto/product.vc.dto';
export declare class TransformProductSuccessorDTOBase {
    identifier: string;
    credentialSubjects: ProductCredentialSubjectDTO;
}
export declare class TransformProductSuccessorDTO extends TransformProductSuccessorDTOBase {
    productId: string;
    productVC: ProductVCDTO;
    productVCHash: string;
}
