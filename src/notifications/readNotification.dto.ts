import { IsNotEmpty, IsNumberString } from 'class-validator'

export class ReadNotificationDTO {
  @IsNotEmpty()
  @IsNumberString()
  notificationId: number
}
