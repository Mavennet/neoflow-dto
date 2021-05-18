import { IsNotEmpty, IsBoolean } from 'class-validator'

export class UpdateNotificationSettingsDTO {
  @IsNotEmpty()
  @IsBoolean()
  actionableOnly: boolean
}
