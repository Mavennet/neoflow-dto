import { type DeliveryTicketCredentialSubjectDTO } from '../events/dto/deliveryTicket';
import { JSON_TYPE_NF } from '../general';
export declare class MonthlyDeliveryStatementsCredentialSubjectDTO {
    type: JSON_TYPE_NF.MONTHLY_DELIVERY_STATEMENTS;
    date: string;
    deliveryStatements: DeliveryTicketCredentialSubjectDTO[];
}
