import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { ArrayMinSize, IsArray, IsNotEmptyObject, ValidateNested } from 'class-validator'
import { DeliveryScheduleDTO } from './deliverySchedule.dto'
import { OrganizationDTO } from '../../../general/dto/organization.dto'

export class CreateDeliveryScheduleDTO {
  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => OrganizationDTO)
  custodian: OrganizationDTO

  @ApiProperty({ isArray: true, type: () => DeliveryScheduleDTO })
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => DeliveryScheduleDTO)
  deliverySchedules: DeliveryScheduleDTO[]
}
