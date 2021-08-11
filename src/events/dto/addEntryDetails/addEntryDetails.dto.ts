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
import { Place, Organization, PostalAddress } from '../../../general'
import { ProductBrief } from '../../../products'
import { ApiProperty } from '@nestjs/swagger'

export class AddEntryDetails {
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
  @Type(() => Place)
  portOfEntry: Place

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => Place)
  portOfDestination: Place

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => Organization)
  carrier: Organization

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => Organization)
  recipient: Organization

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => PostalAddress)
  originAddress: PostalAddress

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => PostalAddress)
  deliveryAddress: PostalAddress

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
