import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsEnum, IsNotEmptyObject, IsOptional, ValidateNested } from 'class-validator'
import { OrganizationDTO } from '../../../general/dto/organization.dto'
import { DELIVERY_MONTH } from '../../constants'

export class CreateDeliveryScheduleDTO extends Array {
  @ApiPropertyOptional()
  @IsOptional()
  batchNumber?: number

  @ApiPropertyOptional()
  @IsOptional()
  inBondNumber?: number

  @ApiPropertyOptional()
  @IsOptional()
  deliveryTicketNumber?: number

  @ApiPropertyOptional()
  @IsOptional()
  @IsEnum(DELIVERY_MONTH)
  estimatedDeliveryMonth?: DELIVERY_MONTH

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => OrganizationDTO)
  custodian: OrganizationDTO
}
