import { MonthlyDeliveryStatementsCredentialSubjectDTO } from './monthlyDeliveryStatements.credentialSubject.dto';
export declare class MonthlyDeliveryStatementsVCDTO {
    '@context': string[];
    id: string;
    type: string[];
    validFrom?: string | Date;
    credentialSubject: MonthlyDeliveryStatementsCredentialSubjectDTO;
}
