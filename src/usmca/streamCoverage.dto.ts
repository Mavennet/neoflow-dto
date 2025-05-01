import { ApiProperty } from '@nestjs/swagger'
import { IsArray, IsDateString, IsNotEmpty, IsString } from 'class-validator'

export class StreamCoverageDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  validFrom: string | Date

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  validUntil: string | Date

  @ApiProperty()
  @IsNotEmpty()
  @IsArray()
  streams: string[]
}
