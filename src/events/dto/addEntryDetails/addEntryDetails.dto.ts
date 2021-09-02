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
import { FLAT_PlaceDTO, FLAT_OrganizationDTO, FLAT_PostalAddressDTO } from '../../../general'
import { ProductBrief } from '../../../products'
import { ApiProperty } from '@nestjs/swagger'

export class AGENT_FLAT_AddEntryDetailsDTO {
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
  @Type(() => FLAT_PlaceDTO)
  portOfEntry: FLAT_PlaceDTO

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => FLAT_PlaceDTO)
  portOfDestination: FLAT_PlaceDTO

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => FLAT_OrganizationDTO)
  carrier: FLAT_OrganizationDTO

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => FLAT_OrganizationDTO)
  recipient: FLAT_OrganizationDTO

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => FLAT_PostalAddressDTO)
  originAddress: FLAT_PostalAddressDTO

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => FLAT_PostalAddressDTO)
  deliveryAddress: FLAT_PostalAddressDTO

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
