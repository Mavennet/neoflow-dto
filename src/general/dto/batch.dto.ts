import { IsOptional } from 'class-validator'

export class CreateBatchDTO {
  @IsOptional()
  batchNumber: number

  @IsOptional()
  inBondNumber: number

  @IsOptional()
  deliveryTicketNumber: number

  @IsOptional()
  estimatedDeliveryMonth: string

  // should this be date instead of string?
  @IsOptional()
  createdAt: string

  @IsOptional()
  deliveredAt: string
}
