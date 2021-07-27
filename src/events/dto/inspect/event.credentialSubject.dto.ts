import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsUUID,
  IsUrl,
  IsArray,
  IsDateString,
  ArrayMinSize,
  ValidateNested
} from 'class-validator'
import { Type } from 'class-transformer'
import {
  PlaceDTO,
  OrganizationDTO,
  ObservationDTO
} from '../../../general'
import {
  ProductDTO
} from '../../../products'
import { ApiProperty } from '@nestjs/swagger'

export class AGENT_InspectCredentialSubjectDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  eventId: string

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  eventTime: Date

  @ApiProperty()
  @IsArray()
  @ArrayMinSize(1)
  type: string[]

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested({ each: true })
  @Type(() => OrganizationDTO)
  initiator: OrganizationDTO

  @ApiProperty()
  @IsArray()
  @ValidateNested({ each: true })
  observations: ObservationDTO[]

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested({ each: true })
  @Type(() => PlaceDTO)
  place: PlaceDTO

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested({ each: true })
  @Type(() => ProductDTO)
  product: ProductDTO
}

export class CORE_InspectCredentialSubjectDTO extends AGENT_InspectCredentialSubjectDTO {
  @ApiProperty()
  @IsArray()
  @ArrayMinSize(1)
  '@context': string[]

  @ApiProperty()
  @IsNotEmpty()
  @IsUrl()
  eventId: string
}
