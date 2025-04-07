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
  IsOptional,
  ArrayNotEmpty,
  IsDateString
} from 'class-validator'
import { Type } from 'class-transformer'
import { EventDTO, ProductHashDTO, PlaceDTO, OrganizationDTO } from '../../../general'
import { TRANSPORTATION_TYPE, TRANSPORT_EVENT_TYPE } from '../../constants'
import { PRODUCT_CATEGORY_TYPE } from '../../../products/constants'

export class TransportEventCredentialSubjectDTO extends EventDTO {
  @IsNotEmpty()
  @IsEnum(TRANSPORT_EVENT_TYPE)
  eventType: TRANSPORT_EVENT_TYPE

  @IsNotEmpty()
  @IsEnum(TRANSPORTATION_TYPE)
  @ValidateIf((o) => o.eventType === TRANSPORT_EVENT_TYPE.START && o.category !== PRODUCT_CATEGORY_TYPE.GAS)
  deliveryMethod: TRANSPORTATION_TYPE
}
