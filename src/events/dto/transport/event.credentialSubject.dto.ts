import { IsNotEmpty, IsOptional, IsUrl, IsEnum, IsString, IsNotEmptyObject, ValidateNested, Matches, ValidateIf } from 'class-validator'
import { Type } from 'class-transformer'
import { AddressDTO } from '../../../general/dto/address.dto'

import { TRANSPORTATION_TYPE, TRANSPORT_EVENT_TYPE } from '../../constants'
import { PRODUCT_CATEGORY_TYPE } from '../../../products/constants'

class TransportationEventCredentialSubjectDTOBase {
  @IsNotEmpty()
  @IsUrl({ require_tld: process.env.NODE_ENV !== "development" })
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

export class CORE_TransportationEventCredentialSubjectDTO extends TransportationEventCredentialSubjectDTOBase {
  @IsOptional()
  @IsString()
  description: string

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => AddressDTO)
  geo: AddressDTO
}

export class AGENT_TransportationEventCredentialSubjectDTO extends TransportationEventCredentialSubjectDTOBase {
}
