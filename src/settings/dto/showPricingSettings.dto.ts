import { IsBoolean, IsOptional } from 'class-validator'
import { ApiPropertyOptional } from '@nestjs/swagger'

export class ShowPricingSettingsDTO {
  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  showPricing?: boolean
}
