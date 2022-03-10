import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsEnum } from 'class-validator'
import { InviteUserDTO as InviteUserDTOBase } from '@mavennet/traceability-dto'
import { ROLES } from '../constants'

export class InviteUserDTO extends InviteUserDTOBase {
  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(ROLES)
  role: ROLES
}
