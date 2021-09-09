import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsUUID,
  IsString,
  IsDateString,
  ValidateNested
} from 'class-validator'
import { Type } from 'class-transformer'
import { AddEntryDetailsVCDTO } from './event.vc.dto'
import {
  AGENT_AddEntryDetailsCredentialSubjectDTO
} from './event.credentialSubject.dto'
import { COMPACT_PlaceDTO, COMPACT_OrganizationDTO, COMPACT_PostalAddressDTO } from '../../../general'
import { ProductBrief } from '../../../products'
import { ApiProperty } from '@nestjs/swagger'

export class AGENT_COMPACT_AddEntryDetailsDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  transactionNumber: string

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  expectedDeliveryDate: string

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => COMPACT_PlaceDTO)
  portOfEntry: COMPACT_PlaceDTO

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => COMPACT_PlaceDTO)
  portOfDestination: COMPACT_PlaceDTO

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => COMPACT_OrganizationDTO)
  carrier: COMPACT_OrganizationDTO

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => COMPACT_OrganizationDTO)
  recipient: COMPACT_OrganizationDTO

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => COMPACT_PostalAddressDTO)
  originAddress: COMPACT_PostalAddressDTO

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => COMPACT_PostalAddressDTO)
  deliveryAddress: COMPACT_PostalAddressDTO

  @ApiProperty()
  @IsNotEmpty()
  valuePerItem: string

  @ApiProperty()
  @IsNotEmpty()
  totalOrderValue: string

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => ProductBrief)
  product: ProductBrief
}

export class AGENT_AddEntryDetailsDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  productId: string

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  eventId: string

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => AGENT_AddEntryDetailsCredentialSubjectDTO)
  addEntryDetailsCredentialSubject: AGENT_AddEntryDetailsCredentialSubjectDTO
}

export class CORE_AddEntryDetailsDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  productId: string

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  eventId: string

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => AddEntryDetailsVCDTO)
  addEntryDetailsVC: AddEntryDetailsVCDTO

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  eventVCHash: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  txHash: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  txTimestamp: string
}
