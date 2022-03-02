import { MECHANICAL_PROPERTY_TYPE, CHEMICAL_PROPERTY_TYPE, GAS_PROPERTY_TYPE } from '../constants';
import { PropertyDTO as PropertyDTOBase } from '@mavennet/traceability-dto';
export declare class PropertyDTO extends PropertyDTOBase {
    identifier: string;
    name: MECHANICAL_PROPERTY_TYPE | CHEMICAL_PROPERTY_TYPE | GAS_PROPERTY_TYPE;
    description: string;
}
