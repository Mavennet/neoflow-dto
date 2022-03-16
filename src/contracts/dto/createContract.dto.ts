import { IsNotEmpty, IsString, ValidateIf, Matches } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class CreateContractDTO {
  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  @Matches(/^did:/)
  sender: string

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  @Matches(/^did:/)
  receiver: string

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  destination: string

  @IsNotEmpty()
  @ApiProperty()
  // eslint-disable-next-line no-useless-escape
  @ValidateIf((o) => o.startDate.match(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/))
  startDate: string

  @IsNotEmpty()
  @ApiProperty()
  // eslint-disable-next-line no-useless-escape
  @ValidateIf((o) => o.endDate.match(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/))
  endDate: string
}
