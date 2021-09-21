import { IsNotEmpty, IsBoolean } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class UpdateNotificationSettingsDTO {
  @IsNotEmpty()
  @ApiProperty()
  @IsBoolean()
  actionableOnly: boolean
}
