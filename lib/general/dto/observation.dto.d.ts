import { JSON_TYPE } from '../constants';
import { PropertyDTO } from './property.dto';
import { MeasurementDTO } from './measurement.dto';
export declare class ObservationDTO {
    type: JSON_TYPE[];
    property: PropertyDTO;
    measurement: MeasurementDTO;
}
export declare abstract class COMPACT_ObservationDTO {
    type: JSON_TYPE[];
    identifier?: string;
    name: string;
    description?: string;
    value: string;
    unit?: string;
}
