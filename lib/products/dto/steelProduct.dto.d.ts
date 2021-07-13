import { JSON_TYPE_METAL, InspectionDTO } from '../../general';
export declare class SteelProductDTO {
    type: JSON_TYPE_METAL[];
    specification: string;
    originalCountryOfMeltAndPour: string;
    inspection: InspectionDTO;
}
