import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsUUID,
  IsUrl,
  IsEnum,
  IsArray,
  IsString,
  IsDateString,
  ArrayMinSize,
  ValidateNested
} from 'class-validator'
import { Type } from 'class-transformer'
import { EVENT_TYPE } from '../../constants'
import {
  PlaceDTO,
  ParcelDeliveryDTO,
  MeasurementDTO,
  OrganizationDTO
} from '../../../general'
import {
  ProductDTO
} from '../../../products'
import { ApiProperty } from '@nestjs/swagger'

export class AGENT_TransportEventCredentialSubjectDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  eventId: string

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  productId: string

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(EVENT_TYPE)
  eventType: EVENT_TYPE

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => OrganizationDTO)
  initiator: OrganizationDTO

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  eventTime: Date

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => PlaceDTO)
  place: PlaceDTO

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => ProductDTO)
  product: ProductDTO

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  trackingNumber: string
}

export class AGENT_BillOfLadingCredentialSubjectDTO {
  @IsNotEmpty()
  @IsUUID()
  eventId: string

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  productId: string

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(EVENT_TYPE)
  eventType: EVENT_TYPE

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => OrganizationDTO)
  initiator: OrganizationDTO

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  billOfLadingNumber: string

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  shippingDate: string

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  arrivalDate: string

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => MeasurementDTO)
  expectedWeight: MeasurementDTO

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => MeasurementDTO)
  deliveredWeight

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ParcelDeliveryDTO)
  freight: ParcelDeliveryDTO
}

export class CORE_TransportEventCredentialSubjectDTO extends AGENT_TransportEventCredentialSubjectDTO {
  @ApiProperty()
  @IsArray()
  @ArrayMinSize(1)
  '@context': string[]

  @ApiProperty()
  @IsArray()
  @ArrayMinSize(1)
  type: string[]

  @ApiProperty()
  @IsNotEmpty()
  @IsUrl()
  eventId: string

  @ApiProperty()
  @IsNotEmpty()
  @IsUrl()
  productId: string
}

export class CORE_BillOfLadingCredentialSubjectDTO extends AGENT_BillOfLadingCredentialSubjectDTO {
  @ApiProperty()
  @IsArray()
  @ArrayMinSize(1)
  '@context': string[]

  @ApiProperty()
  @IsArray()
  @ArrayMinSize(1)
  type: string[]

  @ApiProperty()
  @IsNotEmpty()
  @IsUrl()
  eventId: string

  @ApiProperty()
  @IsNotEmpty()
  @IsUrl()
  productId: string
}
