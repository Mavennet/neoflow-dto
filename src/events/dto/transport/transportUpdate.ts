import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsNotEmpty, ValidateIf, IsOptional, IsString, IsEnum, IsNumberString } from 'class-validator'
import { TRANSPORTATION_TYPE, TRANSPORT_EVENT_TYPE } from '../../constants'
import { PRODUCT_CATEGORY_TYPE } from '../../../products/constants'

export class AGENT_UpdateTransportProductDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  productId: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  eventId: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  revokeEventId: string

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(PRODUCT_CATEGORY_TYPE)
  @ValidateIf((o) => o.eventType === TRANSPORT_EVENT_TYPE.START)
  category: PRODUCT_CATEGORY_TYPE

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(TRANSPORT_EVENT_TYPE)
  eventType: TRANSPORT_EVENT_TYPE

  @ApiPropertyOptional()
  @IsNotEmpty()
  @IsEnum(TRANSPORTATION_TYPE)
  @ValidateIf((o) => o.eventType === TRANSPORT_EVENT_TYPE.START && o.category !== PRODUCT_CATEGORY_TYPE.GAS)
  transportType: TRANSPORTATION_TYPE

  @ApiPropertyOptional()
  @IsNotEmpty()
  @IsString()
  @ValidateIf(
    (o) =>
      o.eventType === TRANSPORT_EVENT_TYPE.START &&
      o.transportType === TRANSPORTATION_TYPE.PIPELINE &&
      o.category !== PRODUCT_CATEGORY_TYPE.GAS
  )
  batchNo: string

  @ApiPropertyOptional()
  @IsNotEmpty()
  @IsString()
  @ValidateIf(
    (o) =>
      o.eventType === TRANSPORT_EVENT_TYPE.START &&
      o.transportType === TRANSPORTATION_TYPE.TRUCK &&
      o.category !== PRODUCT_CATEGORY_TYPE.GAS
  )
  scn: string

  @ApiPropertyOptional()
  @IsNotEmpty()
  @IsString()
  @ValidateIf(
    (o) =>
      o.eventType === TRANSPORT_EVENT_TYPE.START &&
      o.transportType === TRANSPORTATION_TYPE.RAIL &&
      o.category !== PRODUCT_CATEGORY_TYPE.GAS
  )
  bol: string

  @ApiPropertyOptional()
  @IsNotEmpty()
  @IsString()
  @ValidateIf((o) => o.eventType === TRANSPORT_EVENT_TYPE.START && o.category === PRODUCT_CATEGORY_TYPE.GAS)
  displacementId: string

  @ApiPropertyOptional()
  @IsNotEmpty()
  @IsNumberString()
  @ValidateIf((o) => o.eventType === TRANSPORT_EVENT_TYPE.END)
  closingVolume: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @ValidateIf((o) => o.eventType === TRANSPORT_EVENT_TYPE.END)
  trackingNumber: string
}
