import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsNotEmptyObject, IsOptional, ValidateNested } from 'class-validator'
import { OrganizationDTO } from '../../../general/dto/organization.dto'

import { AddressDTO } from '../../../general/dto/address.dto'

export class UpdateDeliveryScheduleDTO extends Array {
  @ApiPropertyOptional()
  @IsOptional()
  batchNumber?: number

  @ApiPropertyOptional()
  @IsOptional()
  inBondNumber?: number

  @ApiPropertyOptional()
  @IsOptional()
  deliveryTicketNumber?: number

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
