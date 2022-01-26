import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsEnum, IsNotEmptyObject, IsOptional, IsString, ValidateNested } from 'class-validator'
import { OrganizationDTO } from '../../../general/dto/organization.dto'
import { DELIVERY_STATUS } from '../../constants/deliveryStatus'

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
  @IsString()
  estimatedDeliveryMonth?: string

  @ApiPropertyOptional()
  @IsOptional()
  createdAt?: string

  @ApiPropertyOptional()
  @IsOptional()
  deliveredAt?: string

  @ApiProperty()
  @IsEnum(DELIVERY_STATUS)
  deliveryStatus: DELIVERY_STATUS

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => OrganizationDTO)
  custodian: OrganizationDTO
}
