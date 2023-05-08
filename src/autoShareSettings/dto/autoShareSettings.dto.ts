import { IsBoolean, IsOptional } from 'class-validator'
import { ApiPropertyOptional } from '@nestjs/swagger'

export class AutoShareSettingsDTO {
  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  autoShareCBP?: boolean

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  autoShareCER?: boolean

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  autoShareBroker?: boolean

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  autoShareEIA?: boolean
}
