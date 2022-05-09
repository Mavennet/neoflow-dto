import { IsNotEmpty, IsNotEmptyObject, IsEnum, IsUUID, IsArray, ValidateNested, ArrayMinSize } from 'class-validator'
import { Type } from 'class-transformer'
import { PlaceDTO, OrganizationDTO } from '../../../general'
import { ProductDTO } from '../../../products'
import { ApiProperty } from '@nestjs/swagger'
import { EVENT_TYPE } from '../../../events'

export class CORE_CreationEventCredentialSubjectDTO {
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

export class AGENT_CreationEventCredentialSubjectDTO extends CORE_CreationEventCredentialSubjectDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  eventId: string
}
