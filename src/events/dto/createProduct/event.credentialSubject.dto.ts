import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsEnum,
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
  JSON_TYPE_METAL,
  OrganizationDTO
} from '../../../general'
import { EVENT_TYPE } from '../../constants'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

class EventCreateCredentialSubjectDTOBase {
  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(EVENT_TYPE)
  @Validate(o => o.eventType === EVENT_TYPE.CREATE)
  eventType: EVENT_TYPE

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => PlaceDTO)
  place: PlaceDTO

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Matches(/^did:/)
  eventCreator: string

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => OrganizationDTO)
  initiator: OrganizationDTO
}

export class AGENT_EventCreateCredentialSubjectDTO extends EventCreateCredentialSubjectDTOBase {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  eventId: string

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  productId: string
}

export class CORE_EventCreateCredentialSubjectDTO extends EventCreateCredentialSubjectDTOBase {
  @ApiProperty()
  @IsArray()
  @ArrayMinSize(1)
  '@context': string[]

  @ApiProperty()
  @IsArray()
  @ArrayMinSize(2)
  @ArrayMaxSize(2)
  @Validate(o =>
    o.type.includes(JSON_TYPE_METAL.EVENT_CREDENTIAL) &&
    o.type.includes(JSON_TYPE_METAL.PRODUCT_CREATION_EVENT_CREDENTIAL)
  )
  type: JSON_TYPE_METAL[]

  @ApiProperty()
  @IsNotEmpty()
  @IsUrl()
  eventId: string

  @ApiProperty()
  @IsNotEmpty()
  @IsUrl()
  productId: string
}
