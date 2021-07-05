import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsUUID,
  IsUrl,
  IsString,
  IsArray,
  IsDateString,
  ArrayMinSize,
  ValidateNested
} from 'class-validator'
import { Type } from 'class-transformer'
import {
  PlaceDTO,
  OrganizationDTO
} from '../../../general'
import {
  ProductDTO
} from '../../../products'
import { ParcelDeliveryDTO } from 'mavennet-dto'

export class AGENT_AddEntryDetailsCredentialSubjectDTO {
  @IsNotEmpty()
  @IsUUID()
  eventId: string

  @IsNotEmpty()
  @IsUrl()
  productId: string

  @IsNotEmpty()
  @IsDateString()
  eventTime: Date

  @IsArray()
  @ArrayMinSize(1)
  type: string[]

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => PlaceDTO)
  portOfEntry: PlaceDTO

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => OrganizationDTO)
  carrier: OrganizationDTO

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => OrganizationDTO)
  recipient: OrganizationDTO

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => PlaceDTO)
  portOfDestination: PlaceDTO

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => ParcelDeliveryDTO)
  shipment: ParcelDeliveryDTO

  @IsNotEmpty()
  @IsString()
  transactionNumber: string

  @IsNotEmpty()
  @IsDateString()
  expectedDeliveryDate: Date

  @IsNotEmpty()
  valuePerItem: string

  @IsNotEmpty()
  totalOrderValue: string

  @IsNotEmptyObject()
  @ValidateNested({ each: true })
  @Type(() => ProductDTO)
  product: ProductDTO
}

export class CORE_AddEntryDetailsCredentialSubjectDTO extends AGENT_AddEntryDetailsCredentialSubjectDTO {
  @IsArray()
  @ArrayMinSize(1)
  '@context': string[]

  @IsNotEmpty()
  @IsUrl()
  eventId: string

  @IsNotEmpty()
  @IsUrl()
  productId: string
}
