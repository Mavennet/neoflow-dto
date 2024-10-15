import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsUUID,
  IsEnum,
  IsArray,
  ArrayMinSize,
  ValidateNested,
  IsDateString,
  IsUrl
} from 'class-validator'
import { Type } from 'class-transformer'
import { PlaceDTO, OrganizationDTO } from '../../../general'
import { TRANSFORMATION_EVENT_TYPE } from '../../constants/transformationEventType'
import { ApiProperty } from '@nestjs/swagger'

export class AGENT_TransformationEventCredentialSubjectDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(TRANSFORMATION_EVENT_TYPE)
  eventType: TRANSFORMATION_EVENT_TYPE

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

export class CORE_TransformationEventCredentialSubjectDTO extends AGENT_TransformationEventCredentialSubjectDTO {
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

  @IsArray()
  @ArrayMinSize(1)
  consumedProducts: string[]
}
