import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, ValidateNested, IsUUID } from 'class-validator'
import { Type } from 'class-transformer'
import { MonthlyDeliveryStatementsVCDTO } from './monthlyDeliveryStatements.vc.dto'

export class CORE_MonthlyDeliveryStatementsDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  eventId: string

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => MonthlyDeliveryStatementsVCDTO)
  eventVC: MonthlyDeliveryStatementsVCDTO
}
