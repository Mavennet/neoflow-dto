import { MeasurementDTO } from 'mavennet-dto';
interface Events {
    event: string;
    co2eProduced: MeasurementDTO;
}
export declare class CarbonFootprintEventsDTO {
    co2eEmissionsInTonnes: number;
    events: Events[];
}
export {};
