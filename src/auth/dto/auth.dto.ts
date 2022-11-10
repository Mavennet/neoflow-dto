import { IsNotEmpty, IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class AuthDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  audience: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  client_id: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  client_secret: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  grant_type: string
}
