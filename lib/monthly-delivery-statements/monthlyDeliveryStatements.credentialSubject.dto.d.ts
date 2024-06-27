import { JSON_TYPE, JSON_TYPE_NF } from '../general';
import { type DeliveryTicketCredentialSubjectDTO } from '../events/dto/deliveryTicket';
export declare class MonthlyDeliveryStatementsCredentialSubjectDTO {
    type: Array<JSON_TYPE | JSON_TYPE_NF>;
    date: string;
    deliveryStatements: DeliveryTicketCredentialSubjectDTO[];
}
