import { ApiProperty } from '@nestjs/swagger'
import { IsArray, IsDate, IsNotEmpty, IsNumber, IsOptional } from 'class-validator'
import { PricingStreams } from './pricingStreams.dto'
import { Type } from 'class-transformer'

export class UpsertEstimatedValueDTO {
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  id?: number

  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  startDate: Date

  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  endDate: Date

  @ApiProperty()
  @IsNotEmpty()
  @IsArray()
  @Type(() => PricingStreams)
  streams: PricingStreams[]
}
