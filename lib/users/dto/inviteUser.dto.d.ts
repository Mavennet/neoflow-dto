import { InviteUserDTO as InviteUserDTOBase } from '@mavennet/traceability-dto';
import { ROLES } from '../constants';
export declare class InviteUserDTO extends InviteUserDTOBase {
    role: ROLES;
}
