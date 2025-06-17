import { ApiProperty } from '@nestjs/swagger'
import {
  IsDateString,
  IsNotEmptyObject,
  IsNotEmpty,
  IsEnum,
  IsUUID,
  IsString,
  Validate,
  ValidateNested,
  IsObject
} from 'class-validator'
import { Type } from 'class-transformer'
import { TRANSPORT_EVENT_TYPE } from '../../constants'
import {
  COMPACT_OrganizationDTO,
  COMPACT_PlaceDTO,
  COMPACT_MeasurementDTO,
  COMPACT_PostalAddressDTO,
  WrappedEnvelopedVCDTO
} from '../../../general'

export class AGENT_COMPACT_TransportStartDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(TRANSPORT_EVENT_TYPE)
  @Validate((o) => o.eventType === TRANSPORT_EVENT_TYPE.START)
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
  @Validate((o) => o.eventType === TRANSPORT_EVENT_TYPE.END)
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

export class TransportProductDataDto {
  @IsNotEmpty()
  @IsString()
  batchNumber: string

  @IsNotEmpty()
  @IsString()
  shipper: string

  @IsNotEmpty()
  @IsString()
  pipeline: string

  @IsNotEmpty()
  @IsDateString()
  nominationMonth: string

  @IsNotEmpty()
  @IsString()
  commodity: string
}

export class CORE_TransportProductDTO {
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => TransportProductDataDto)
  productData: TransportProductDataDto

  @IsNotEmpty()
  @IsObject()
  @Type(() => WrappedEnvelopedVCDTO)
  vc: WrappedEnvelopedVCDTO
}
