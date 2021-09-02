import { PRODUCT_NAME } from '../constants';
import { MeasurementDTO, FLAT_MeasurementDTO, FLAT_OrganizationDTO } from '../../general';
import { ProductDTO as ProductDTOBase } from 'mavennet-dto';
export declare class ProductDTO extends ProductDTOBase {
    name: PRODUCT_NAME;
    weight: MeasurementDTO;
    length?: MeasurementDTO;
    width?: MeasurementDTO;
    id?: string;
}
export declare class ProductBrief {
    id: string;
    name: PRODUCT_NAME;
    weight: FLAT_MeasurementDTO;
    width?: FLAT_MeasurementDTO;
    length?: FLAT_MeasurementDTO;
    manufacturer: FLAT_OrganizationDTO;
    description: string;
}
