import { IsBoolean, IsOptional } from 'class-validator'
import { ApiPropertyOptional } from '@nestjs/swagger'

export class SupportPricingSettingsDTO {
  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  supportPricing?: boolean
}
