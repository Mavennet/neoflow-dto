import { IsOptional } from 'class-validator'

export class CreateDeliveryScheduleDTO {
  @IsOptional()
  batchNumber: number
  
  @IsOptional()
  inBondNumber: number

  @IsOptional()
  deliveryTicketNumber: number

  @IsOptional()
  estimatedDeliveryMonth: string

  @IsOptional()
  createdAt: string

  @IsOptional()
  deliveredAt: string
}
