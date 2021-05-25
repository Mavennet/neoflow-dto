import { JSON_TYPE } from '../../general';
import { ProductDTO } from './product.dto';
import { ProductCredentialSubjectDTO as ProductCredentialSubjectDTOBase } from 'mavennet-dto';
export declare class ProductCredentialSubjectDTO extends ProductCredentialSubjectDTOBase {
    type: JSON_TYPE[];
    product: ProductDTO;
    grade: string;
}
