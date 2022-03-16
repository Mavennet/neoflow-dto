import { JSON_TYPE } from '../../general/constants';
import { OrganizationDTO, MeasurementDTO } from '../../general/dto';
import { PRODUCT_NAME, CRUDE_STREAM } from '../constants';
declare class ProductDTOBase {
    type: JSON_TYPE[];
    manufacturer: OrganizationDTO;
    name: PRODUCT_NAME;
    category: CRUDE_STREAM;
    description: string;
    sizeOrAmount: MeasurementDTO;
    wight: MeasurementDTO;
    sku: string;
}
export declare class ProductDTO extends ProductDTOBase {
}
export {};
