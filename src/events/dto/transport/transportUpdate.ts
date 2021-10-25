import { IsNotEmpty, IsUrl, ValidateIf, IsOptional, IsString, IsEnum, IsNumberString } from 'class-validator'
import { TRANSPORTATION_TYPE, TRANSPORT_EVENT_TYPE } from '../../constants'
import { PRODUCT_CATEGORY_TYPE } from '../../../products/constants'

export class AGENT_UpdateTransportProductDTO {
  @IsNotEmpty()
  @IsUrl()
  @ValidateIf((o) => o.eventId.startsWith('http://neo-flow.com/credentials/'))
  productId: string

  @IsNotEmpty()
  @IsUrl()
  @ValidateIf((o) => o.eventId.startsWith('http://neo-flow.com/credentials/'))
  eventId: string

  @IsNotEmpty()
  @IsUrl()
  @ValidateIf((o) => o.eventId.startsWith('http://neo-flow.com/credentials/'))
  revokeEventId: string

  @IsNotEmpty()
  @IsEnum(PRODUCT_CATEGORY_TYPE)
  @ValidateIf((o) => o.eventType === TRANSPORT_EVENT_TYPE.START)
  category: PRODUCT_CATEGORY_TYPE

  @IsNotEmpty()
  @IsEnum(TRANSPORT_EVENT_TYPE)
  eventType: TRANSPORT_EVENT_TYPE

  @IsNotEmpty()
  @IsEnum(TRANSPORTATION_TYPE)
  @ValidateIf((o) => o.eventType === TRANSPORT_EVENT_TYPE.START && o.category !== PRODUCT_CATEGORY_TYPE.GAS)
  transportType: TRANSPORTATION_TYPE

  @IsNotEmpty()
  @IsString()
  @ValidateIf(
    (o) =>
      o.eventType === TRANSPORT_EVENT_TYPE.START &&
      o.transportType === TRANSPORTATION_TYPE.PIPELINE &&
      o.category !== PRODUCT_CATEGORY_TYPE.GAS
  )
  batchNo: string

  @IsNotEmpty()
  @IsString()
  @ValidateIf(
    (o) =>
      o.eventType === TRANSPORT_EVENT_TYPE.START &&
      o.transportType === TRANSPORTATION_TYPE.TRUCK &&
      o.category !== PRODUCT_CATEGORY_TYPE.GAS
  )
  scn: string

  @IsNotEmpty()
  @IsString()
  @ValidateIf(
    (o) =>
      o.eventType === TRANSPORT_EVENT_TYPE.START &&
      o.transportType === TRANSPORTATION_TYPE.RAIL &&
      o.category !== PRODUCT_CATEGORY_TYPE.GAS
  )
  bol: string

  @IsNotEmpty()
  @IsString()
  @ValidateIf((o) => o.eventType === TRANSPORT_EVENT_TYPE.START && o.category === PRODUCT_CATEGORY_TYPE.GAS)
  displacementId: string

  @IsNotEmpty()
  @IsNumberString()
  @ValidateIf((o) => o.eventType === TRANSPORT_EVENT_TYPE.END)
  closingVolume: string

  @IsOptional()
  @IsString()
  @ValidateIf((o) => o.eventType === TRANSPORT_EVENT_TYPE.END)
  trackingNumber: string
}
