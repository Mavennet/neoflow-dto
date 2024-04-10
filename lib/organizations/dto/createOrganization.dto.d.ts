import { CreateOrganizationDTO as CreateOrganizationDTOBase } from '@mavennet/traceability-dto';
export declare class CreateOrganizationDTO extends CreateOrganizationDTOBase {
    mid: string;
    cbpImporterRecord: string;
    uwi: Map<string, string>;
    userPoolID: string;
    adminAppClientID: string;
    isNF: boolean;
    isShipper: boolean;
    isCheckToken: boolean;
    alias: string[];
    profile: string;
    portOfArrivalID: number;
}
