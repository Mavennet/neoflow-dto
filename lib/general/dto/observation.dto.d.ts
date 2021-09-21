import { JSON_TYPE } from '../constants';
import { PropertyDTO } from './property.dto';
import { MeasurementDTO } from './measurement.dto';
export declare class ObservationDTO {
    type: JSON_TYPE[];
    property: PropertyDTO;
    measurement: MeasurementDTO;
}
