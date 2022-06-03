import { IsNotEmpty, IsNotEmptyObject, IsEnum, IsUUID, IsArray, ValidateNested, ArrayMinSize, IsDateString } from 'class-validator'
import { Type } from 'class-transformer'
import { PlaceDTO, OrganizationDTO } from '../../../general'
import { ProductDTO } from '../../../products'
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

  @ApiProperty()
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => ProductDTO)
  products: ProductDTO[]
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
}
