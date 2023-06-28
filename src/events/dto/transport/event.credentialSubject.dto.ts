import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import {
  IsNotEmpty,
  IsEnum,
  IsString,
  ValidateIf,
  IsArray,
  ArrayMinSize,
  ValidateNested,
  IsNotEmptyObject,
  IsOptional
} from 'class-validator'
import { Type } from 'class-transformer'
import { EventDTO, ProductHashDTO, PlaceDTO, OrganizationDTO } from '../../../general'
import { TRANSPORTATION_TYPE, TRANSPORT_EVENT_TYPE } from '../../constants'
import { PRODUCT_CATEGORY_TYPE } from '../../../products/constants'

export class AGENT_TransportationEventCredentialSubjectDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(TRANSPORT_EVENT_TYPE)
  eventType: TRANSPORT_EVENT_TYPE

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => PlaceDTO)
  place: PlaceDTO

  @ApiProperty({ isArray: true, type: () => OrganizationDTO })
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => OrganizationDTO)
  actor: OrganizationDTO[]

  @ApiProperty({ isArray: true, type: () => ProductHashDTO })
  @IsOptional()
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => ProductHashDTO)
  products?: ProductHashDTO[]

  @ApiPropertyOptional()
  @IsNotEmpty()
  @IsEnum(TRANSPORTATION_TYPE)
  @ValidateIf((o) => o.eventType === TRANSPORT_EVENT_TYPE.START && o.category !== PRODUCT_CATEGORY_TYPE.GAS)
  deliveryMethod: TRANSPORTATION_TYPE

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @ValidateIf(
    (o) =>
      o.eventType === TRANSPORT_EVENT_TYPE.START &&
      o.deliveryMethod === TRANSPORTATION_TYPE.PIPELINE &&
      o.category !== PRODUCT_CATEGORY_TYPE.GAS
  )
  trackingNumber?: string
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
