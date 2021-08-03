import { MeasurementDTO } from 'mavennet-dto';
interface FuelTypesDetails {
    fuelType: string;
    fuelUsage: MeasurementDTO;
}
export declare class StationaryCombustionDTO {
    co2EmissionsInTonnes: number;
    co2eEmissionsInTonnes: number;
    ch4EmissionsInTonnes: number;
    no2EmissionsInTonnes: number;
    fuelTypesDetails: FuelTypesDetails[];
}
export {};
