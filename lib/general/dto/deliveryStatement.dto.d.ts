import { ObservationDTO } from '@mavennet/traceability-dto';
import { JSON_TYPE_NF } from '../constants';
import { MeasurementDTO } from './measurement.dto';
export declare abstract class DeliveryStatementDTO {
    type: JSON_TYPE_NF.DELIVERY_STATEMENT;
    deliveredDate: string;
    deliveredVolume: MeasurementDTO;
    observation: ObservationDTO[];
}
export declare class MonthlyDeliveryStatementDTO {
    type: JSON_TYPE_NF.MONTHLY_DELIVERY_STATEMENTS;
    statementMonth: string;
    itemsDelivered: DeliveryStatementDTO[];
}
