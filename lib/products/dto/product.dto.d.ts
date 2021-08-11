import { PRODUCT_NAME } from '../constants';
import { MeasurementDTO, Measurement, Organization } from '../../general';
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
    weight: Measurement;
    width?: Measurement;
    length?: Measurement;
    manufacturer: Organization;
    description: string;
}
