import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsEnum, IsString, IsEmail } from 'class-validator'

import { ROLES } from '../constants'

export class InviteUserDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(ROLES)
  role: ROLES
}
