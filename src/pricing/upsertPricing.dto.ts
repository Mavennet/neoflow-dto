import { ApiProperty } from '@nestjs/swagger'
import { IsArray, IsDate, IsEnum, IsNotEmpty, IsNumber, IsOptional } from 'class-validator'
import { PricingStreams } from './pricingStreams.dto'
import { Type } from 'class-transformer'
import { PRICING_STATUS } from './constants'

export class UpsertPricingDTO {
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  id?: number

  @ApiProperty()
  @IsOptional()
  @IsDate()
  startDate?: Date

  @ApiProperty()
  @IsOptional()
  @IsDate()
  endDate?: Date

  @ApiProperty()
  @IsOptional()
  @IsArray()
  @Type(() => PricingStreams)
  streams?: PricingStreams[]

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(PRICING_STATUS)
  status: PRICING_STATUS
}
