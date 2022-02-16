import { IsNotEmpty, ValidateIf, IsOptional, IsString } from 'class-validator'

export class UpdateQPInbondDTO {
  @IsNotEmpty()
  productId: string

  @IsNotEmpty()
  eventId: string

  @IsNotEmpty()
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
