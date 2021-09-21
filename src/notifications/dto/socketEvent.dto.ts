import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString } from 'class-validator'

export class SocketEventDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  eventName: string
}
