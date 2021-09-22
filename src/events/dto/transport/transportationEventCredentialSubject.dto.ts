import { IsNotEmpty, IsOptional, IsUUID, IsEnum, IsString, Matches, ValidateIf } from 'class-validator'

import { TRANSPORTATION_TYPE, TRANSPORT_EVENT_TYPE } from '../../constants'
import { PRODUCT_CATEGORY_TYPE } from '../../../products/constants'

export class TransportationEventCredentialSubjectDTO {
  @IsNotEmpty()
  @IsUUID()
  productId: string

  @IsNotEmpty()
  @IsEnum(TRANSPORT_EVENT_TYPE)
  eventType: TRANSPORT_EVENT_TYPE

  @IsOptional()
  @IsString()
  description: string

  @IsNotEmpty()
  @IsString()
  @Matches(/^did:/)
  eventCreator: string

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
  @IsEnum(PRODUCT_CATEGORY_TYPE)
  category: PRODUCT_CATEGORY_TYPE

  @IsNotEmpty()
  @IsString()
  @ValidateIf((o) => o.eventType === TRANSPORT_EVENT_TYPE.START && o.category === PRODUCT_CATEGORY_TYPE.GAS)
  displacementId: string
}
