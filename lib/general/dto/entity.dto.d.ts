import { JSON_TYPE } from '../constants';
import { OrganizationDTO } from './';
export declare abstract class EntityDTO {
    type: JSON_TYPE[];
    entityType: string;
    name: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    phoneNumber?: string;
    worksFor?: OrganizationDTO;
}
