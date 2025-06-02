import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsArray, IsDate } from 'class-validator'
import { PricingStreams } from './pricingStreams.dto'

export class ValidatePricingRecordsDTO {
  @ApiProperty()
  @IsDate()
  startDate: Date

  @ApiProperty()
  @IsDate()
  endDate: Date

  @ApiProperty()
  @IsArray()
  @Type(() => PricingStreams)
  streams: PricingStreams[]
}
