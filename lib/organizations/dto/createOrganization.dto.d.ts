import { ORGANIZATION_ROLE } from '../constants';
export declare class CreateOrganizationDTO {
    name: string;
    role: ORGANIZATION_ROLE;
    did: string;
    backendLink: string;
    mid: string;
    userPoolID: string;
    adminAppClientID: string;
    isNF: boolean;
    isShipper: boolean;
    isCheckToken: boolean;
    alias: string[];
    profile: string;
    portOfArrivalID: number;
}
