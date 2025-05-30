import { ApiProperty } from '@nestjs/swagger'
import { IsDate } from 'class-validator'

export class GetStreamsDTO {
  @ApiProperty()
  @IsDate()
  startDate: Date

  @ApiProperty()
  @IsDate()
  endDate: Date
}
