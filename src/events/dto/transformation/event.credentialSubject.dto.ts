import {
  IsNotEmpty,
  IsNotEmptyObject,
  ArrayNotEmpty,
  IsUUID,
  IsUrl,
  IsEnum,
  IsArray,
  IsNumber,
  IsString,
  IsDateString,
  ArrayMinSize,
  ArrayMaxSize,
  ValidateNested,
  Validate,
  ValidateIf
} from 'class-validator'
import { Type } from 'class-transformer'
import {
  EVENT_TYPE,
  TRANSFORM_TYPE
} from '../../constants'
import {
  PlaceDTO,
  MeasurementDTO,
  OrganizationDTO,
  VerifiableCredentialDTO
} from '../../../general'
import {
  ProductDTO
} from '../../../products'

export class AGENT_TransformEventCredentialSubjectDTO {
  @IsNotEmpty()
  @IsUUID()
  eventId: string

  @IsNotEmpty()
  @IsDateString()
  eventTime: Date

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => PlaceDTO)
  place: PlaceDTO

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => OrganizationDTO)
  initiator: OrganizationDTO

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => ProductDTO)
  newProduct: ProductDTO

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => ProductDTO)
  consumedProducts: ProductDTO
}

export class CORE_TransformEventCredentialSubjectDTO extends AGENT_TransformEventCredentialSubjectDTO {
  @IsArray()
  @ArrayMinSize(1)
  '@context': string[]

  @IsArray()
  @ArrayMinSize(1)
  type: string[]

  @IsNotEmpty()
  @IsEnum(TRANSFORM_TYPE)
  eventType: TRANSFORM_TYPE

  @IsNotEmpty()
  @IsUrl()
  eventId: string
}