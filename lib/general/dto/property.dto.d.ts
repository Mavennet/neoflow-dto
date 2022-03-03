import { JSON_TYPE_NF as JSON_TYPE, MECHANICAL_PROPERTY_TYPE, CHEMICAL_PROPERTY_TYPE, GAS_PROPERTY_TYPE } from '../constants';
export declare class PropertyDTO {
    type: JSON_TYPE[];
    identifier: string;
    name: MECHANICAL_PROPERTY_TYPE | CHEMICAL_PROPERTY_TYPE | GAS_PROPERTY_TYPE;
    description: string;
}
