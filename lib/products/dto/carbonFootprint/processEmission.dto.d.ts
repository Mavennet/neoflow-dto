import { MeasurementDTO } from 'mavennet-dto';
interface ProcessMaterialsDetails {
    processMaterial: string;
    amount: MeasurementDTO;
}
export declare class ProcessEmissionDTO {
    co2EmissionsInTonnes: number;
    co2eEmissionsInTonnes: number;
    processMaterialsDetails: ProcessMaterialsDetails[];
}
export {};
