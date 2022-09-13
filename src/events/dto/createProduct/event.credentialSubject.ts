import { IsNotEmpty, IsNotEmptyObject, IsEnum, IsUUID, IsArray, ValidateNested, ArrayMinSize, IsDateString, IsUrl } from 'class-validator'
import { Type } from 'class-transformer'
import { PlaceDTO, OrganizationDTO } from '../../../general'
import { ApiProperty } from '@nestjs/swagger'
import { EVENT_TYPE } from '../../../events'

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

  @ApiProperty()
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
  @IsUrl({ protocols: ['http', 'https'], require_tld: false }, { each: true })
  products: string[]
}
