import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { ArrayMinSize, IsArray, IsEnum, IsNotEmptyObject, IsNumber, IsOptional, ValidateNested } from 'class-validator'
import { OrganizationDTO } from '../../../general/dto/organization.dto'
import { DELIVERY_MONTH } from '../../constants'

export class CreateDeliveryScheduleDTO {
  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  batchNumber?: number

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  inBondNumber?: number

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
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

  @ApiProperty()
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => CreateDeliveryScheduleDTO)
  deliverySchedules: CreateDeliveryScheduleDTO[]
}
