import { ApiProperty } from '@nestjs/swagger'
import { IsString } from 'class-validator'

export class GetStreamsDTO {
  @ApiProperty()
  @IsString()
  startDate: string

  @ApiProperty()
  @IsString()
  endDate: string
}
