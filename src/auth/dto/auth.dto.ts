import { IsNotEmpty, IsString } from 'class-validator'

export class AuthDTO {
  @IsNotEmpty()
  @IsString()
  audience: string

  @IsNotEmpty()
  @IsString()
  client_id: string

  @IsNotEmpty()
  @IsString()
  client_secret: string

  @IsNotEmpty()
  @IsString()
  grant_type: string
}
