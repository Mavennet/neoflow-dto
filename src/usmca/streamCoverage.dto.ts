import { ApiProperty } from '@nestjs/swagger'
import { IsArray, IsDate, IsNotEmpty } from 'class-validator'

export class StreamCoverageDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  validFrom: Date

  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  validUntil: Date

  @ApiProperty()
  @IsNotEmpty()
  @IsArray()
  streams: string[]
}
