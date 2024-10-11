import { OrganizationDTO, MonthlyDeliveryStatementDTO } from '../../../general';
import { JSON_TYPE } from '../../../general/constants';
import { ProofDTO } from '../../../general/dto';
export declare class MonthlyPipelineStatementCredentialSubject {
    carrier: OrganizationDTO;
    shipper: OrganizationDTO;
    consignee: OrganizationDTO;
    monthlyDeliveryStatement: MonthlyDeliveryStatementDTO;
}
export declare class AGENT_MonthlyPipelineStatementDTO {
    productId: string;
    credentialSubject: MonthlyPipelineStatementCredentialSubject;
}
export declare class MonthlyPipelineStatement_VC {
    '@context': string[];
    id: string;
    type: JSON_TYPE[];
    issuer: string;
    credentialSubject: MonthlyPipelineStatementCredentialSubject;
    validFrom?: string | Date;
    proof: ProofDTO;
}
export declare class CORE_MonthlyPipelineStatementDTO {
    productId: string;
    eventId: string;
    eventVC: MonthlyPipelineStatement_VC;
}
