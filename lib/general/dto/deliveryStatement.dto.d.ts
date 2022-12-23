import { JSON_TYPE_NF } from '../constants';
import { MeasurementDTO } from './measurement.dto';
import { ObservationDTO } from '@mavennet/traceability-dto';
export declare abstract class DeliveryStatementDTO {
    type: JSON_TYPE_NF[];
    deliveredDate: string;
    deliveredVolume: MeasurementDTO;
    observation: ObservationDTO[];
}
export declare class MonthlyDeliveryStatementDTO {
    type: JSON_TYPE_NF[];
    statementMonth: string;
    itemsDelivered: DeliveryStatementDTO[];
}
