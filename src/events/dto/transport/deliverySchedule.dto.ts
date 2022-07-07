import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsEnum, IsNotEmpty, IsNotEmptyObject, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator'
import { AddressDTO } from '../../../general/dto/address.dto'
import { OrganizationDTO } from '../../../general/dto/organization.dto'
import { DELIVERY_MONTH } from '../../constants'

export class DeliveryScheduleDTO {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  batchNumber?: string

  @ApiPropertyOptional()
  @IsNotEmpty()
  @IsNumber()
  inBondNumber: number

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  deliveryTicketNumber: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  deliveredVolume?: number

  @ApiPropertyOptional()
  @IsOptional()
  @IsEnum(DELIVERY_MONTH)
  estimatedDeliveryMonth?: DELIVERY_MONTH

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => OrganizationDTO)
  custodian: OrganizationDTO

  @ApiPropertyOptional()
  @ValidateNested()
  @Type(() => AddressDTO)
  address: AddressDTO
}
