import { ROLES } from '../constants';
import { InviteUserDTO as InviteUserDTOBase } from '@mavennet/traceability-dto';
export declare class InviteUserDTO extends InviteUserDTOBase {
    role: ROLES;
}
