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
import { FLAT_OrganizationDTO, FLAT_PlaceDTO, FLAT_MeasurementDTO, FLAT_PostalAddressDTO } from '../../../general'
import { ProductBrief } from '../../../products'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export class AGENT_FLAT_TransportStartDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(TRANSPORT_TYPE)
  @Validate(o => o.eventType === TRANSPORT_TYPE.TRANSPORT_START)
  eventType: TRANSPORT_TYPE

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => FLAT_OrganizationDTO)
  initiator: FLAT_OrganizationDTO

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
  @Type(() => FLAT_PlaceDTO)
  place: FLAT_PlaceDTO
}

export class AGENT_FLAT_TransportEndDTO {
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
  @Type(() => FLAT_OrganizationDTO)
  initiator: FLAT_OrganizationDTO

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
  @Type(() => FLAT_MeasurementDTO)
  expectedWeight: FLAT_MeasurementDTO

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => FLAT_MeasurementDTO)
  deliveredWeight: FLAT_MeasurementDTO

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

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  txHash: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  txTimestamp: string
}
