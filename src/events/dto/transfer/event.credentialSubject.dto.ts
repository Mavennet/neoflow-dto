import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsOptional,
  IsEnum,
  IsString,
  IsNumberString,
  ValidateNested,
  Matches,
  IsArray,
  ArrayMinSize,
  IsDateString
} from 'class-validator'
import { Type } from 'class-transformer'
import { TRANSFER_EVENT_TYPE } from '../../constants'
import { PlaceDTO, OrganizationDTO } from '../../../general'
import { ProductDTO } from '../../../products'

export class AGENT_TransferEventCredentialSubjectDTO {
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => PlaceDTO)
  place: PlaceDTO

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => ProductDTO)
  products: ProductDTO[]

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => OrganizationDTO)
  actor: OrganizationDTO[]

  @IsOptional()
  @IsString()
  @Matches(/^did:/)
  initiator: string

  @IsNotEmpty()
  @IsString()
  @Matches(/^did:/)
  receiver: string

  @IsOptional()
  @IsNumberString()
  price?: string

  @IsOptional()
  @ValidateNested()
  @Type(() => PlaceDTO)
  portOfArrival: PlaceDTO

  @IsOptional()
  @ValidateNested()
  @Type(() => PlaceDTO)
  portOfEntry: PlaceDTO

  @IsOptional()
  @ValidateNested()
  @Type(() => PlaceDTO)
  portOfDestination: PlaceDTO

  @IsOptional()
  @ValidateNested()
  @Type(() => PlaceDTO)
  receiptLocation: PlaceDTO

  @IsOptional()
  @IsString()
  countryOfDestination: string
}

export class CORE_TransferEventCredentialSubjectDTO extends AGENT_TransferEventCredentialSubjectDTO {
  @IsArray()
  @ArrayMinSize(1)
  type: string[]

  @IsNotEmpty()
  @IsString()
  @IsEnum(TRANSFER_EVENT_TYPE)
  eventType: TRANSFER_EVENT_TYPE

  @IsNotEmpty()
  eventId: string

  @IsNotEmpty()
  @IsDateString()
  eventTime: string
}
