import { IsNotEmpty, IsUrl, IsOptional, IsString } from 'class-validator'

export class UpdateQPInbondDTO {
  @IsNotEmpty()
  @IsUrl()
  productId: string

  @IsNotEmpty()
  @IsUrl()
  eventId: string

  @IsNotEmpty()
  @IsUrl()
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
