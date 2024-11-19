import { IsArray, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { NotificationDTO } from './notification.dto'

export abstract class CategorizedNotificationsDTO {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => NotificationDTO)
  new: NotificationDTO[]

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => NotificationDTO)
  previous: NotificationDTO[]
}
