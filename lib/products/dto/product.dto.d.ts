import { JSON_TYPE } from '../../general/constants';
import { OrganizationDTO, MeasurementDTO } from '../../general/dto';
import { PRODUCT_NAME, CRUDE_STREAM } from '../constants';
export declare class ProductDTO {
    type: JSON_TYPE[];
    manufacturer: OrganizationDTO;
    name: PRODUCT_NAME;
    category: CRUDE_STREAM;
    description: string;
    sizeOrAmount: MeasurementDTO;
    wight: MeasurementDTO;
    sku: string;
}
