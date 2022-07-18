import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsEnum, IsNotEmpty, IsNotEmptyObject, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator'
import { AddressDTO } from '../../../general/dto/address.dto'
import { OrganizationDTO } from '../../../general/dto/organization.dto'
import { DELIVERY_MONTH } from '../../constants'

export class DeliveryScheduleDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  batchNumber: string

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  inBondNumber: number

  @ApiProperty()
  @IsOptional()
  @IsString()
  deliveryTicketNumber: string

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  deliveredVolume: number

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(DELIVERY_MONTH)
  estimatedDeliveryMonth: DELIVERY_MONTH

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
