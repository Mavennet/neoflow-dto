import { CredentialDTO } from '../../../credentials';
import { MonthlyDeliveryStatementDTO, OrganizationDTO } from '../../../general';
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
export declare class MonthlyPipelineStatementVC extends CredentialDTO<MonthlyPipelineStatementCredentialSubject> {
    credentialSubject: MonthlyPipelineStatementCredentialSubject;
}
export declare class CORE_MonthlyPipelineStatementDTO {
    productId: string;
    eventId: string;
    eventVC: MonthlyPipelineStatementVC;
}
