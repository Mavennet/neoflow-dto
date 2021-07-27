import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsUUID,
  IsUrl,
  IsEnum,
  IsArray,
  IsDateString,
  ArrayMinSize,
  ValidateNested
} from 'class-validator'
import { Type } from 'class-transformer'
import { EVENT_TYPE } from '../../constants'
import {
  PlaceDTO,
  MeasurementDTO,
  ObservationDTO,
  OrganizationDTO
} from '../../../general'
import { ProductDTO } from '../../../products'

export class AGENT_StorageEventCredentialSubjectDTO {
  @IsNotEmpty()
  @IsUUID()
  eventId: string

  @IsNotEmpty()
  @IsEnum(EVENT_TYPE)
  eventType: EVENT_TYPE

  @IsNotEmpty()
  @IsDateString()
  eventTime: Date

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => OrganizationDTO)
  initiator: OrganizationDTO

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => PlaceDTO)
  place: PlaceDTO

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => ProductDTO)
  product: ProductDTO

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => MeasurementDTO)
  storedWeight: MeasurementDTO

  @IsArray()
  @ValidateNested({ each: true })
  observations: ObservationDTO[]
}

export class CORE_StorageEventCredentialSubjectDTO extends AGENT_StorageEventCredentialSubjectDTO {
  @IsArray()
  @ArrayMinSize(1)
  '@context': string[]

  @IsArray()
  @ArrayMinSize(1)
  type: string[]

  @IsNotEmpty()
  @IsUrl()
  eventId: string

  @IsNotEmpty()
  @IsUrl()
  productId: string
}
