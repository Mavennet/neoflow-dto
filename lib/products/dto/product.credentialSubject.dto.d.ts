import { ProductDTO } from './product.dto';
import { ProductCredentialSubjectDTO as ProductCredentialSubjectDTOBase } from 'mavennet-dto';
export declare class ProductCredentialSubjectDTO extends ProductCredentialSubjectDTOBase {
    type: any;
    product: ProductDTO;
    grade: string;
}
