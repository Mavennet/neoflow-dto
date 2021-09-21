import { IsNotEmpty, IsUrl, ValidateIf, IsOptional, IsString } from 'class-validator'

export class UpdateQPInbondDTO {
  @IsNotEmpty()
  @IsUrl()
  @ValidateIf((o) => o.eventId.startsWith('http://neo-flow.com/credentials/'))
  productId: string

  @IsNotEmpty()
  @IsUrl()
  @ValidateIf((o) => o.eventId.startsWith('http://neo-flow.com/credentials/'))
  eventId: string

  @IsNotEmpty()
  @IsUrl()
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
