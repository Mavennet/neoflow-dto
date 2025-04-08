import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsEnum, ValidateIf } from 'class-validator'
import { EventDTO } from '../../../general'
import { TRANSPORTATION_TYPE, TRANSPORT_EVENT_TYPE } from '../../constants'
import { PRODUCT_CATEGORY_TYPE } from '../../../products/constants'

export class TransportEventCredentialSubjectDTO extends EventDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(TRANSPORT_EVENT_TYPE)
  eventType: TRANSPORT_EVENT_TYPE

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(TRANSPORTATION_TYPE)
  @ValidateIf((o) => o.eventType === TRANSPORT_EVENT_TYPE.START && o.category !== PRODUCT_CATEGORY_TYPE.GAS)
  deliveryMethod: TRANSPORTATION_TYPE
}
