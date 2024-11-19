import { IsNotEmpty, IsBoolean } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export abstract class UpdateNotificationSettingsDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  actionableOnly: boolean
}
