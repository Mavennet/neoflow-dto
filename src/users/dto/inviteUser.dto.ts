import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsEnum } from 'class-validator'
import { ROLES } from '../constants'
import { InviteUserDTO as InviteUserDTOBase } from '@mavennet/traceability-dto'

export class InviteUserDTO extends InviteUserDTOBase{
  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(ROLES)
  role: ROLES
}
