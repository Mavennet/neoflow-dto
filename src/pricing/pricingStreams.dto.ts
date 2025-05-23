import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class PricingStreams {
  @ApiProperty()
  @IsNotEmpty()
  streamType: string

  @ApiProperty()
  @IsNotEmpty()
  estimatedValue: number
}
