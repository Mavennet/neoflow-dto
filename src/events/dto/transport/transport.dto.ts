import { IsDateString, IsNotEmptyObject, IsNotEmpty, IsEnum, IsUrl, IsUUID, IsString, Validate, ValidateNested, ValidateIf } from 'class-validator'
import { Type } from 'class-transformer'
import {
  AGENT_TransportationEventCredentialSubjectDTO,
  OGBillOfLadingCredentialSubjectDTO,
  CORE_TransportationEventDetailsDTO,
  OGBillOfLadingVCDTO
} from '.'
import { TRANSPORT_EVENT_TYPE } from '../../constants'
import { COMPACT_OrganizationDTO, COMPACT_PlaceDTO, COMPACT_MeasurementDTO, COMPACT_PostalAddressDTO } from '../../../general'
import { ApiProperty } from '@nestjs/swagger'

export class AGENT_COMPACT_TransportStartDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(TRANSPORT_EVENT_TYPE)
  @Validate(o => o.eventType === TRANSPORT_EVENT_TYPE.START)
  eventType: TRANSPORT_EVENT_TYPE

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => COMPACT_OrganizationDTO)
  initiator: COMPACT_OrganizationDTO

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  billOfLadingNumber: string

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => COMPACT_PlaceDTO)
  place: COMPACT_PlaceDTO
}

export class AGENT_COMPACT_TransportEndDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(TRANSPORT_EVENT_TYPE)
  @Validate(o => o.eventType === TRANSPORT_EVENT_TYPE.END)
  eventType: TRANSPORT_EVENT_TYPE

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  productId: string

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => COMPACT_OrganizationDTO)
  initiator: COMPACT_OrganizationDTO

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
  @Type(() => COMPACT_MeasurementDTO)
  expectedWeight: COMPACT_MeasurementDTO

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => COMPACT_MeasurementDTO)
  deliveredWeight: COMPACT_MeasurementDTO

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
}

class TransportProductDTOBase {
  @IsNotEmpty()
  @IsUrl({ require_tld: process.env.NODE_ENV !== 'development' })
  productId: string

  @IsNotEmpty()
  @IsUUID()
  eventId: string

  @IsNotEmpty()
  @IsEnum(TRANSPORT_EVENT_TYPE)
  eventType: TRANSPORT_EVENT_TYPE
}

export class CORE_TransportProductDTO extends TransportProductDTOBase {
  @IsNotEmpty()
  @ValidateNested()
  @ValidateIf((o) => o.eventType === TRANSPORT_EVENT_TYPE.START)
  @Type(() => CORE_TransportationEventDetailsDTO)
  transportVC: CORE_TransportationEventDetailsDTO

  @IsNotEmpty()
  @ValidateNested()
  @ValidateIf((o) => o.eventType === TRANSPORT_EVENT_TYPE.END)
  @Type(() => OGBillOfLadingVCDTO)
  bolVC: OGBillOfLadingVCDTO

  @IsNotEmpty()
  @IsString()
  eventVCHash: string

}

export class AGENT_TransportProductDTO extends TransportProductDTOBase {
  @IsNotEmpty()
  @ValidateNested()
  @ValidateIf((o) => o.eventType === TRANSPORT_EVENT_TYPE.START)
  @Type(() => AGENT_TransportationEventCredentialSubjectDTO)
  transportCredentialSubject: AGENT_TransportationEventCredentialSubjectDTO

  @IsNotEmpty()
  @ValidateNested()
  @ValidateIf((o) => o.eventType === TRANSPORT_EVENT_TYPE.END)
  @Type(() => OGBillOfLadingCredentialSubjectDTO)
  billOfLadingCredentialSubject: OGBillOfLadingCredentialSubjectDTO
}
