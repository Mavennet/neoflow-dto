import { JSON_TYPE_METAL } from '../../general';
import { ProductDTO } from './product.dto';
import { ProductCredentialSubjectDTO as ProductCredentialSubjectDTOBase } from 'mavennet-dto';
export declare class ProductCredentialSubjectDTO extends ProductCredentialSubjectDTOBase {
    type: JSON_TYPE_METAL[];
    HSCode: string;
    sku?: string;
    heatNumber: string;
    product: ProductDTO;
    grade?: string;
}
