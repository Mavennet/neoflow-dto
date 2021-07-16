import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsOptional,
  IsEnum,
  IsArray,
  IsNumberString,
  IsString,
  IsDateString,
  ArrayMinSize,
  ValidateNested,
  Validate,
  ValidateIf
} from 'class-validator'
import { Type } from 'class-transformer'
import { EVENT_TYPE } from '../../constants'
import {
  PlaceDTO,
  OrganizationDTO
} from '../../../general'
import {
  ProductDTO
} from '../../../products'

export class AGENT_TransferEventCredentialSubjectDTO {
  @IsNotEmpty()
  @IsEnum(EVENT_TYPE)
  @Validate(o => (
    o.eventType === EVENT_TYPE.TRANSFER_CUSTODY ||
    o.eventType === EVENT_TYPE.TRANSFER_CUSTODY
  ))
  eventType: EVENT_TYPE

  @IsNotEmpty()
  @IsDateString()
  eventTime: string

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => PlaceDTO)
  place: PlaceDTO

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => ProductDTO)
  product: ProductDTO

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => OrganizationDTO)
  initiator: OrganizationDTO

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => OrganizationDTO)
  receiver: OrganizationDTO

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => PlaceDTO)
  portOfEntry: PlaceDTO

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => PlaceDTO)
  portOfDestination: PlaceDTO

  @IsOptional()
  @IsString()
  countryOfDestination?: string

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => PlaceDTO)
  @ValidateIf(o => o.eventType === EVENT_TYPE.TRANSFER_CUSTODY)
  receiptLocation?: PlaceDTO

  @IsNotEmpty()
  @IsNumberString()
  @ValidateIf(o => o.eventType === EVENT_TYPE.TRANSFER_OWNERSHIP)
  price?: string
}

export class CORE_TransferEventCredentialSubjectDTO extends AGENT_TransferEventCredentialSubjectDTO {
  @IsArray()
  @ArrayMinSize(1)
  '@context': string[]

  @IsArray()
  @ArrayMinSize(1)
  type: string[]
}
