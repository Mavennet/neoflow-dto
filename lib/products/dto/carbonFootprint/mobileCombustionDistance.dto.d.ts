import { MeasurementDTO } from 'mavennet-dto';
declare class DistanceDetails {
    vehicleType: string;
    fuelType: string;
    distance: MeasurementDTO;
}
export declare class MobileCombustionDistanceDTO {
    co2EmissionsInTonnes: number;
    co2eEmissionsInTonnes: number;
    ch4EmissionsInTonnes: number;
    no2EmissionsInTonnes: number;
    distanceDetails: DistanceDetails[];
}
export {};
