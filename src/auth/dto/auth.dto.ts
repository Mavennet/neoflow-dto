import { IsNotEmpty } from 'class-validator'

export class AuthDTO {
  @IsNotEmpty()
  audience: string

  @IsNotEmpty()
  client_id: string

  @IsNotEmpty()
  client_secret: string

  @IsNotEmpty()
  grant_type: string
}
