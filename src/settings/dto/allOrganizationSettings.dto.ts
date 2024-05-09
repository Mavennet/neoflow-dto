import { IsBoolean } from 'class-validator'
import { ApiPropertyOptional } from '@nestjs/swagger'

export class AllOrganizationSettingsDTO {
  @ApiPropertyOptional()
  @IsBoolean()
  autoShareCBP?: boolean

  @ApiPropertyOptional()
  @IsBoolean()
  autoShareBroker?: boolean

  @ApiPropertyOptional()
  @IsBoolean()
  autoShareEIA?: boolean

  @ApiPropertyOptional()
  @IsBoolean()
  autoSharePipeline?: boolean

  @ApiPropertyOptional()
  @IsBoolean()
  supportOil?: boolean

  @ApiPropertyOptional()
  @IsBoolean()
  supportGas?: boolean

  @ApiPropertyOptional()
  @IsBoolean()
  supportPricing?: boolean
}
