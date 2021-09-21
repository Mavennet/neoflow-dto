import { IsBoolean, IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class AutoShareSettingsDTO {
  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  autoShareCBP: boolean

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  autoShareCER: boolean
}
