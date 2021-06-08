import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsArray,
  IsOptional,
  IsUUID,
  IsUrl,
  IsString,
  ValidateNested,
  Matches,
  ArrayMinSize,
  ArrayMaxSize,
  Validate
} from 'class-validator'
import { Type } from 'class-transformer'
import {
  PlaceDTO,
  JSON_TYPE_METAL
} from '../../../general'

class EventCreateCredentialSubjectDTOBase {
  @IsOptional()
  @IsString()
  description: string

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => PlaceDTO)
  place: PlaceDTO

  @IsNotEmpty()
  @IsString()
  @Matches(/^did:/)
  eventCreator: string
}

export class AGENT_EventCreateCredentialSubjectDTO extends EventCreateCredentialSubjectDTOBase {
  @IsNotEmpty()
  @IsUUID()
  eventId: string

  @IsNotEmpty()
  @IsUUID()
  productId: string
}

export class CORE_EventCreateCredentialSubjectDTO extends EventCreateCredentialSubjectDTOBase {
  @IsArray()
  @ArrayMinSize(1)
  '@context': string[]

  @IsArray()
  @ArrayMinSize(2)
  @ArrayMaxSize(2)
  @Validate(o =>
    o.type.includes(JSON_TYPE_METAL.EVENT_CREDENTIAL) &&
    o.type.includes(JSON_TYPE_METAL.PRODUCT_CREATION_EVENT_CREDENTIAL)
  )
  type: Array<JSON_TYPE_METAL>

  @IsNotEmpty()
  @IsUrl()
  eventId: string

  @IsNotEmpty()
  @IsUrl()
  productId: string
}