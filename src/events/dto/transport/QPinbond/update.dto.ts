import { IsNotEmpty, IsUrl, ValidateIf, IsOptional, IsString } from 'class-validator'

export class UpdateQPInbondDTO {
  @IsNotEmpty()
  @IsUrl({ require_tld: process.env.NODE_ENV !== 'development' })
  @ValidateIf((o) => o.eventId.startsWith('http://neo-flow.com/credentials/'))
  productId: string

  @IsNotEmpty()
  @IsUrl({ require_tld: process.env.NODE_ENV !== 'development' })
  @ValidateIf((o) => o.eventId.startsWith('http://neo-flow.com/credentials/'))
  eventId: string

  @IsNotEmpty()
  @IsUrl({ require_tld: process.env.NODE_ENV !== 'development' })
  @ValidateIf((o) => o.eventId.startsWith('http://neo-flow.com/credentials/'))
  revokeEventId: string

  @IsOptional()
  @IsString()
  inBondNumber: string

  @IsOptional()
  @IsString()
  entryId: string

  @IsOptional()
  @IsString()
  ftzNo: string
}
