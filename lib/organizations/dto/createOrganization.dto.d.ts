declare enum ROLES {
    CLIENT = "client",
    AGENCY = "agency",
    BROKER = "broker"
}
export declare class CreateOrganizationDTO {
    name: string;
    email: string;
    address: string;
    phone: string;
    mid: string;
    cbpImporterRecord: string;
    role: ROLES;
    did: string;
    backendLink: string;
    uwi: Map<string, string>;
}
export {};
