import {
  IsNotEmpty,
  IsEnum,
  IsString,
  ValidateIf
} from 'class-validator'
import { EventDTO } from '../../../general'
import { TRANSPORTATION_TYPE, TRANSPORT_EVENT_TYPE } from '../../constants'
import { PRODUCT_CATEGORY_TYPE } from '../../../products/constants'

export class AGENT_TransportationEventCredentialSubjectDTO {
  @IsNotEmpty()
  @IsEnum(TRANSPORTATION_TYPE)
  @ValidateIf((o) => o.eventType === TRANSPORT_EVENT_TYPE.START && o.category !== PRODUCT_CATEGORY_TYPE.GAS)
  deliveryMethod: TRANSPORTATION_TYPE

  @IsNotEmpty()
  @IsString()
  @ValidateIf(
    (o) =>
      o.eventType === TRANSPORT_EVENT_TYPE.START &&
      o.deliveryMethod === TRANSPORTATION_TYPE.PIPELINE &&
      o.category !== PRODUCT_CATEGORY_TYPE.GAS
  )
  batchNumber: string

  @IsNotEmpty()
  @IsString()
  @ValidateIf(
    (o) =>
      o.eventType === TRANSPORT_EVENT_TYPE.START &&
      o.deliveryMethod === TRANSPORTATION_TYPE.TRUCK &&
      o.category !== PRODUCT_CATEGORY_TYPE.GAS
  )
  scn: string
}

export class CORE_TransportationEventCredentialSubjectDTO extends EventDTO {
  @IsNotEmpty()
  @IsEnum(TRANSPORT_EVENT_TYPE)
  eventType: TRANSPORT_EVENT_TYPE

  @IsNotEmpty()
  @IsEnum(TRANSPORTATION_TYPE)
  @ValidateIf((o) => o.eventType === TRANSPORT_EVENT_TYPE.START && o.category !== PRODUCT_CATEGORY_TYPE.GAS)
  deliveryMethod: TRANSPORTATION_TYPE
}

//   @IsNotEmpty()
//   productId: string

//   @IsNotEmpty()
//   @IsEnum(TRANSPORT_EVENT_TYPE)
//   eventType: TRANSPORT_EVENT_TYPE

//   @IsOptional()
//   @IsString()
//   description: string

//   @IsNotEmpty()
//   @IsString()
//   @Matches(/^did:/)
//   eventCreator: string

//   @IsNotEmpty()
//   @IsString()
//   @ValidateIf(
//     (o) =>
//       o.eventType === TRANSPORT_EVENT_TYPE.START &&
//       o.deliveryMethod === TRANSPORTATION_TYPE.RAIL &&
//       o.category !== PRODUCT_CATEGORY_TYPE.GAS
//   )
//   bol: string

//   @IsNotEmpty()
//   @IsEnum(PRODUCT_CATEGORY_TYPE)
//   category: PRODUCT_CATEGORY_TYPE

//   @IsNotEmpty()
//   @IsString()
//   @ValidateIf((o) => o.eventType === TRANSPORT_EVENT_TYPE.START && o.category === PRODUCT_CATEGORY_TYPE.GAS)
//   displacementId: string
