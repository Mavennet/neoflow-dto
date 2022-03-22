import { ApiPropertyOptional } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { ArrayMinSize, IsOptional, ValidateNested } from 'class-validator'
import { DeliveryScheduleDTO } from './deliverySchedule.dto'

export class CreateTransportDTO {
  @ApiPropertyOptional()
  @IsOptional()
  @ValidateNested()
  @Type(() => DeliveryScheduleDTO)
  deliverySchedule: DeliveryScheduleDTO

  @ApiPropertyOptional()
  @ArrayMinSize(1)
  productIdList: string[]
}
