import { MeasurementDTO } from 'mavennet-dto';
declare class FuelTypesDetails {
    fuelType: string;
    fuelUsage: MeasurementDTO;
}
export declare class StationaryCombustionDTO {
    fuelTypesDetails: FuelTypesDetails[];
}
export {};
