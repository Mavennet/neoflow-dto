import {
  IsNotEmpty,
  IsEnum,
  IsString,
  ValidateIf,
  IsArray,
  ArrayMinSize,
  ValidateNested,
  IsNotEmptyObject
} from 'class-validator'
import { Type } from 'class-transformer'
import { EventDTO, ProductHashDTO, PlaceDTO, OrganizationDTO } from '../../../general'
import { TRANSPORTATION_TYPE, TRANSPORT_EVENT_TYPE } from '../../constants'
import { PRODUCT_CATEGORY_TYPE } from '../../../products/constants'

export class AGENT_TransportationEventCredentialSubjectDTO {
  @IsNotEmpty()
  @IsEnum(TRANSPORT_EVENT_TYPE)
  eventType: TRANSPORT_EVENT_TYPE

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => PlaceDTO)
  place: PlaceDTO

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => OrganizationDTO)
  actor: OrganizationDTO[]

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => ProductHashDTO)
  products: ProductHashDTO[]

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
  trackingNumber: string

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
