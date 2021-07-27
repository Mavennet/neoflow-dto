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
import {
  TRANSFORM_TYPE
} from '../../constants'
import {
  PlaceDTO,
  OrganizationDTO
} from '../../../general'
import {
  ProductDTO
} from '../../../products'
import { ApiProperty } from '@nestjs/swagger'

export class AGENT_TransformEventCredentialSubjectDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  eventId: string

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  eventTime: Date

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(TRANSFORM_TYPE)
  eventType: TRANSFORM_TYPE

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => PlaceDTO)
  place: PlaceDTO

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => OrganizationDTO)
  initiator: OrganizationDTO

  @ApiProperty()
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => ProductDTO)
  newProduct: ProductDTO[]

  @ApiProperty()
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => ProductDTO)
  consumedProducts: ProductDTO[]
}

export class CORE_TransformEventCredentialSubjectDTO extends AGENT_TransformEventCredentialSubjectDTO {
  @ApiProperty()
  @IsArray()
  @ArrayMinSize(1)
  '@context': string[]

  @ApiProperty()
  @IsArray()
  @ArrayMinSize(1)
  type: string[]

  @ApiProperty()
  @IsNotEmpty()
  @IsUrl()
  eventId: string
}
