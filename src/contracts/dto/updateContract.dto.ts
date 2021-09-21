import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsNumber, ValidateIf } from 'class-validator'

export class UpdateContractDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  contractId: number

  @ApiProperty()
  @IsNotEmpty()
  // eslint-disable-next-line no-useless-escape
  @ValidateIf((o) => o.startDate.match(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/))
  startDate: string

  @ApiProperty()
  @IsNotEmpty()
  // eslint-disable-next-line no-useless-escape
  @ValidateIf((o) => o.endDate.match(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/))
  endDate: string
}
