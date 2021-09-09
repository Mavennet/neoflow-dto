import { PRODUCT_NAME } from '../constants';
import { MeasurementDTO, COMPACT_MeasurementDTO, COMPACT_OrganizationDTO } from '../../general';
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
    weight: COMPACT_MeasurementDTO;
    width?: COMPACT_MeasurementDTO;
    length?: COMPACT_MeasurementDTO;
    manufacturer: COMPACT_OrganizationDTO;
    description: string;
}
