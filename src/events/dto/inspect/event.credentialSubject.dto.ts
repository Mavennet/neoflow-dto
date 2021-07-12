import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsUUID,
  IsUrl,
  IsString,
  IsArray,
  IsDateString,
  ArrayMinSize,
  ValidateNested
} from 'class-validator'
import { Type } from 'class-transformer'
import {
  PlaceDTO,
  OrganizationDTO
} from '../../../general'
import {
  ProductDTO
} from '../../../products'
import { ObservationDTO, ParcelDeliveryDTO } from 'mavennet-dto'

export class AGENT_InspectCredentialSubjectDTO {
  @IsNotEmpty()
  @IsUUID()
  eventId: string

  @IsArray()
  @ArrayMinSize(1)
  type: string[]

  @IsNotEmpty()
  @IsDateString()
  eventTime: Date

  @IsArray()
  @ValidateNested({ each: true })
  observations: ObservationDTO[]
}

export class CORE_InspectCredentialSubjectDTO extends AGENT_InspectCredentialSubjectDTO {
  @IsArray()
  @ArrayMinSize(1)
  '@context': string[]

  @IsNotEmptyObject()
  @ValidateNested({ each: true })
  @Type(() => OrganizationDTO)
  initiator: OrganizationDTO

  @IsNotEmptyObject()
  @ValidateNested({ each: true })
  @Type(() => PlaceDTO)
  place: PlaceDTO

  @IsNotEmptyObject()
  @ValidateNested({ each: true })
  @Type(() => ProductDTO)
  product: ProductDTO
}
