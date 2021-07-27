import { MeasurementDTO } from 'mavennet-dto';
interface ProcessMaterialsDetails {
    processMaterial: string;
    amount: MeasurementDTO;
}
export declare class ProcessEmissionDTO {
    processMaterialsDetails: ProcessMaterialsDetails[];
}
export {};
