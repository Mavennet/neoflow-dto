import { IsNotEmpty, IsUrl, IsOptional, IsString } from 'class-validator'

export class UpdateQPInbondDTO {
  @IsNotEmpty()
  @IsUrl({ require_tld: process.env.NODE_ENV !== 'development' })
  productId: string

  @IsNotEmpty()
  @IsUrl({ require_tld: process.env.NODE_ENV !== 'development' })
  eventId: string

  @IsNotEmpty()
  @IsUrl({ require_tld: process.env.NODE_ENV !== 'development' })
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
