import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsUUID,
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
  OrganizationDTO,
} from '../../../general'
import {
  ProductDTO
} from '../../../products'

export class AGENT_TransportEventCredentialSubjectDTO {
  @IsNotEmpty()
  @IsUUID()
  eventId: string

  @IsNotEmpty()
  @IsUUID()
  productId: string
  
  @IsNotEmpty()
  @IsEnum(EVENT_TYPE)
  eventType: EVENT_TYPE

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => OrganizationDTO)
  initiator: OrganizationDTO

  @IsNotEmpty()
  @IsDateString()
  eventTime: Date

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => PlaceDTO)
  place: PlaceDTO

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => ProductDTO)
  product: ProductDTO

  @IsNotEmpty()
  @IsString()
  trackingNumber: string
}

export class AGENT_BillOfLadingCredentialSubjectDTO {
  @IsNotEmpty()
  @IsUUID()
  eventId: string

  @IsNotEmpty()
  @IsUUID()
  productId: string

  @IsNotEmpty()
  @IsEnum(EVENT_TYPE)
  eventType: EVENT_TYPE

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => OrganizationDTO)
  initiator: OrganizationDTO

  @IsNotEmpty()
  @IsString()
  billOfLadingNumber: string

  @IsNotEmpty()
  @IsDateString()
  shippingDate: string

  @IsNotEmpty()
  @IsDateString()
  arrivalDate: string

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => MeasurementDTO)
  expectedWeight: MeasurementDTO

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => MeasurementDTO)
  deliveredWeight

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ParcelDeliveryDTO)
  freight: ParcelDeliveryDTO
}

export class CORE_TransportEventCredentialSubjectDTO extends AGENT_TransportEventCredentialSubjectDTO {
  @IsArray()
  @ArrayMinSize(1)
  '@context': string[]

  @IsArray()
  @ArrayMinSize(1)
  type: string[]
}

export class CORE_BillOfLadingCredentialSubjectDTO extends AGENT_BillOfLadingCredentialSubjectDTO {
  @IsArray()
  @ArrayMinSize(1)
  '@context': string[]

  @IsArray()
  @ArrayMinSize(1)
  type: string[]
}
