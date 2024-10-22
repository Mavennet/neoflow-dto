import { ProductDTO as ProductDTOBase } from '@mavennet/traceability-dto';
import { JSON_TYPE } from '../../general/constants';
import { MeasurementDTO } from '../../general/dto';
import { PRODUCT_NAME } from '../constants';
export declare class ProductDTO extends ProductDTOBase {
    type: JSON_TYPE.PRODUCT;
    name: PRODUCT_NAME;
    category?: string;
    sizeOrAmount: MeasurementDTO;
    wight?: MeasurementDTO;
    sku?: string;
    batchNumber?: string;
    commodity?: string;
}
