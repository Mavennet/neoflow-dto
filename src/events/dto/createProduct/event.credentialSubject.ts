import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import {
  ArrayMinSize,
  ArrayNotEmpty,
  IsArray,
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsNotEmptyObject,
  IsUUID,
  ValidateNested
} from 'class-validator'
import { EVENT_TYPE } from '../../../events'
import { OrganizationDTO, PlaceDTO } from '../../../general'

export class AGENT_CreationEventCredentialSubjectDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(EVENT_TYPE)
  eventType: EVENT_TYPE

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
}

export class CORE_CreationEventCredentialSubjectDTO extends AGENT_CreationEventCredentialSubjectDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  eventId: string

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  eventTime: string

  @ApiProperty()
  @IsArray()
  @ArrayMinSize(1)
  products: string[]

  @ApiProperty()
  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(EVENT_TYPE, { each: true })
  type: EVENT_TYPE[]
}
