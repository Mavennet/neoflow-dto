import { IsNotEmpty, IsUUID, IsNumber } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class ShareMonthlyDeliveryStatementsDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  monthlyDeliveryStatementsId: string

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  orgId: number
}
