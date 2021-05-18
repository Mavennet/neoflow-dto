import { IsNotEmpty, IsString } from 'class-validator'

export class SocketEventDTO {
  @IsNotEmpty()
  @IsString()
  eventName: string
}
