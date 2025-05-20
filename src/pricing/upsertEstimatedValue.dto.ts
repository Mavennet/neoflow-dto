import { ApiProperty } from '@nestjs/swagger'
import { IsArray, IsDate, IsNotEmpty } from 'class-validator'

class PricingStreams {
  @ApiProperty()
  @IsNotEmpty()
  streamType: string

  @ApiProperty()
  @IsNotEmpty()
  estimatedValue: number
}

export class UpsertEstimatedValueDTO {
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
  streams: PricingStreams[]
}
