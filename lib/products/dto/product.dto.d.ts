import { JSON_TYPE_NF } from '../../general/constants';
import { MeasurementDTO, OrganizationDTO } from '../../general/dto';
import { PRODUCT_NAME } from '../constants';
export declare abstract class ProductDTOBase {
    abstract type: any;
    manufacturer?: OrganizationDTO;
    productID?: string;
    abstract name: string;
    description?: string;
}
export declare class ProductDTO extends ProductDTOBase {
    type: JSON_TYPE_NF[];
    name: PRODUCT_NAME;
    category?: string;
    sizeOrAmount: MeasurementDTO;
    wight?: MeasurementDTO;
    sku?: string;
    batchNumber?: string;
    commodity?: string;
}
