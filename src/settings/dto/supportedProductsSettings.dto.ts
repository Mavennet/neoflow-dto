import { IsBoolean, IsOptional } from 'class-validator'
import { ApiPropertyOptional } from '@nestjs/swagger'

export class SupportedProductsSettingsDTO {
  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  supportOil?: boolean

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  supportGas?: boolean
}
