import { IsNotEmpty, IsNumberString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class ReadNotificationDTO {
  @IsNotEmpty()
  @ApiProperty()
  @IsNumberString()
  notificationId: number
}
