import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsOptional,
  IsUUID,
  IsEnum,
  IsString,
  IsArray,
  ArrayMinSize,
  ValidateNested,
  Matches,
  IsDateString
} from 'class-validator'
import { Type } from 'class-transformer'
import { PlaceDTO, OrganizationDTO } from '../../../general'
import { TRANSFORMATION_EVENT_TYPE } from '../../constants/transformationEventType'
import { ApiProperty } from '@nestjs/swagger'
import { ProductDTO } from '../../../products'

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

  @ApiProperty()
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
  @ValidateNested({ each: true })
  @Type(() => ProductDTO)
  products: ProductDTO[]

  @IsArray()
  @ArrayMinSize(1)
  consumedProducts: string[]

  @IsArray()
  @ArrayMinSize(1)
  newProducts: string[]
}
