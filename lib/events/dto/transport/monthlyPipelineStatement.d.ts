import { OrganizationDTO, MonthlyDeliveryStatementDTO } from '../../../general';
export declare class AGENT_MONTHLY_PIPELINE_STATEMENT_DTO {
    productId: string;
    credentialSubject?: MonthlyPipelineStatementCredentialSubject;
}
export declare class MonthlyPipelineStatementCredentialSubject {
    carrier: OrganizationDTO;
    shipper: OrganizationDTO;
    consignee: OrganizationDTO;
    monthlyDeliveryStatement: MonthlyDeliveryStatementDTO;
}
