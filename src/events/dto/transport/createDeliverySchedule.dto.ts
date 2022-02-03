import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsEnum, IsNotEmptyObject, IsOptional, ValidateNested } from 'class-validator'
import { AddressDTO } from '../../../general/dto/address.dto'
import { OrganizationDTO } from '../../../general/dto/organization.dto'
import { DELIVERY_STATUS, DELIVERY_MONTH } from '../../constants'

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
  @IsEnum(DELIVERY_STATUS)
  deliveryStatus: DELIVERY_STATUS

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => OrganizationDTO)
  custodian: OrganizationDTO

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => AddressDTO)
  address: AddressDTO
}
