import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsUUID,
  IsString,
  IsUrl,
  IsEnum,
  IsArray,
  IsDateString,
  ArrayMinSize,
  ValidateNested,
  Validate
} from 'class-validator'
import { Type } from 'class-transformer'
import { EVENT_TYPE } from '../../constants'
import {
  OrganizationDTO,
  ParcelDeliveryDTO
} from '../../../general'
import { SteelProductDTO } from '../../../products'

export class AGENT_MillTestCredentialSubjectDTO {
  @IsNotEmpty()
  @IsUUID()
  eventId: string

  @IsNotEmpty()
  @IsDateString()
  eventTime: Date

  @IsNotEmpty()
  @IsEnum(EVENT_TYPE)
  @Validate(o => o.eventType === EVENT_TYPE.MILL_TEST_REPORT)
  eventType: EVENT_TYPE

  @IsNotEmpty()
  @IsString()
  Certifier: string

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => OrganizationDTO)
  manufacturer: OrganizationDTO

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => SteelProductDTO)
  product: SteelProductDTO

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => ParcelDeliveryDTO)
  shipment: ParcelDeliveryDTO
}

export class CORE_MillTestCredentialSubjectDTO extends AGENT_MillTestCredentialSubjectDTO {
  @IsArray()
  @ArrayMinSize(1)
  '@context': string[]

  @IsArray()
  @ArrayMinSize(1)
  type: string[]

  @IsNotEmpty()
  @IsUrl()
  eventId: string
}
