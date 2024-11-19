import { IsNotEmpty, IsNumberString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export abstract class ReadNotificationDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumberString()
  notificationId: number
}
