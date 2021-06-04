import { PRODUCT_NAME } from '../constants';
import { MeasurementDTO } from '../../general';
import { ProductDTO as ProductDTOBase } from 'mavennet-dto';
export declare class ProductDTO extends ProductDTOBase {
    name: PRODUCT_NAME;
    weight: MeasurementDTO;
}
