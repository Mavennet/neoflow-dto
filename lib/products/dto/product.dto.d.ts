import { ProductDTO as ProductDTOBase } from '@mavennet/traceability-dto';
import { JSON_TYPE } from '../../general/constants';
import { MeasurementDTO } from '../../general/dto';
import { CRUDE_STREAM, PRODUCT_NAME } from '../constants';
export declare class ProductDTO extends ProductDTOBase {
    type: JSON_TYPE[];
    name: PRODUCT_NAME;
    category: CRUDE_STREAM;
    sizeOrAmount: MeasurementDTO;
    wight?: MeasurementDTO;
    sku?: string;
    batchNumber?: string;
}
