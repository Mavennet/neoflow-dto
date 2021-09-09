import {
  IsNotEmptyObject,
  IsNotEmpty,
  IsOptional,
  IsEnum,
  IsString,
  IsDateString,
  ValidateNested,
  ValidateIf,
  Validate,
  IsUUID
} from 'class-validator'
import { Type } from 'class-transformer'
import {
  TransportEventVCDTO,
  BillOfLadingVCDTO
} from './event.vc.dto'
import {
  AGENT_TransportEventCredentialSubjectDTO,
  AGENT_BillOfLadingCredentialSubjectDTO
} from './event.credentialSubject.dto'
import { EVENT_TYPE, TRANSPORT_TYPE } from '../../constants'
import { Organization, Place, Measurement, PostalAddress } from '../../../general'
import { ProductBrief } from '../../../products'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export class TransportStart {
  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(TRANSPORT_TYPE)
  @Validate(o => o.eventType === TRANSPORT_TYPE.TRANSPORT_START)
  eventType: TRANSPORT_TYPE

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => Organization)
  initiator: Organization

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => ProductBrief)
  product: ProductBrief

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  billOfLadingNumber: string

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => Place)
  place: Place
}

export class TransportEnd {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  productId: string

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(TRANSPORT_TYPE)
  @Validate(o => o.eventType === TRANSPORT_TYPE.TRANSPORT_END)
  eventType: TRANSPORT_TYPE

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => Organization)
  initiator: Organization

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
  @Type(() => Measurement)
  expectedWeight: Measurement

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => Measurement)
  deliveredWeight: Measurement

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

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  deliveryMethod?: string
}

export class AGENT_TransportProductDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(EVENT_TYPE)
  eventType: EVENT_TYPE

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
  @ValidateIf(o => o.eventType === EVENT_TYPE.TRANSPORT_START)
  @Type(() => AGENT_TransportEventCredentialSubjectDTO)
  transportCredentialSubject?: AGENT_TransportEventCredentialSubjectDTO

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @ValidateIf(o => o.eventType === EVENT_TYPE.TRANSPORT_END)
  @Type(() => AGENT_BillOfLadingCredentialSubjectDTO)
  billOfLadingCredentialSubject?: AGENT_BillOfLadingCredentialSubjectDTO
}

export class CORE_TransportProductDTO {
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
  @IsEnum(EVENT_TYPE)
  eventType: EVENT_TYPE

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @ValidateIf(o => o.eventType === EVENT_TYPE.TRANSPORT_START)
  @Type(() => TransportEventVCDTO)
  transportVC?: TransportEventVCDTO

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @ValidateIf(o => o.eventType === EVENT_TYPE.TRANSPORT_END)
  @Type(() => BillOfLadingVCDTO)
  bolVC?: BillOfLadingVCDTO

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  eventVCHash: string
}
