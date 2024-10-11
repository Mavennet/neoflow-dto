import { ProofDTO } from '../general/dto/proof.dto';
import { MonthlyDeliveryStatementsCredentialSubjectDTO } from './monthlyDeliveryStatements.credentialSubject.dto';
export declare class MonthlyDeliveryStatementsVCDTO {
    '@context': string[];
    id: string;
    type: string[];
    validFrom?: string | Date;
    credentialSubject: MonthlyDeliveryStatementsCredentialSubjectDTO;
    proof: ProofDTO;
}
