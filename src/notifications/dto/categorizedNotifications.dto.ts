import { IsArray, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { NotificationDTO } from './'
import { ApiProperty } from '@nestjs/swagger'

export class CategorizedNotificationsDTO {
  @IsArray()
  @ApiProperty()
  @ValidateNested({ each: true })
  @Type(() => NotificationDTO)
  new: NotificationDTO[]

  @IsArray()
  @ApiProperty()
  @ValidateNested({ each: true })
  @Type(() => NotificationDTO)
  previous: NotificationDTO[]
}
