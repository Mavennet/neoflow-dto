import { IsNotEmpty, IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export abstract class SocketEventDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  eventName: string
}
