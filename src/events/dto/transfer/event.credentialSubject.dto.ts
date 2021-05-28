import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsUrl,
  IsEnum,
  IsArray,
  IsNumber,
  IsString,
  IsDateString,
  ArrayMinSize,
  ArrayMaxSize,
  ValidateNested,
  Validate,
  ValidateIf
} from 'class-validator'
import { Type } from 'class-transformer'
import {
  EVENT_TYPE,
  PlaceDTO,
  OrganizationDTO,
  VerifiableCredentialDTO
} from '../../../general'
import {
  ProductDTO
} from '../../../products'

export class TransferEventCredentialSubjectDTO {
  @IsArray()
  @ArrayMinSize(1)
  '@context': string[]

  @IsArray()
  @ArrayMinSize(1)
  type: string[]

  @IsNotEmpty()
  @IsEnum(EVENT_TYPE)
  eventType: EVENT_TYPE

  @IsNotEmpty()
  @IsDateString()
  eventTime: Date

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
  @ValidateIf(o => o.eventType === EVENT_TYPE.TRANSFER_CUSTODY)
  portOfArrival: PlaceDTO

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => PlaceDTO)
  portOfDestination: PlaceDTO

  @IsNotEmpty()
  @IsString()
  countryOfDestination: string  

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => PlaceDTO)
  @ValidateIf(o => o.eventType === EVENT_TYPE.TRANSFER_CUSTODY)
  recipientLocation: PlaceDTO

  @IsNotEmpty()
  @IsNumber()
  @ValidateIf(o => o.eventType === EVENT_TYPE.TRANSFER_OWNERSHIP)
  price: number
}