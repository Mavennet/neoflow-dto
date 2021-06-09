import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsUrl,
  IsEnum,
  IsArray,
  IsNumberString,
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
  AddressDTO,
  EVENT_TYPE,
  PlaceDTO,
  MeasurementDTO,
  OrganizationDTO,
  VerifiableCredentialDTO
} from '../../../general'
import {
  ProductDTO
} from '../../../products'

export class AGENT_TransferEventCredentialSubjectDTO {
  @IsNotEmpty()
  @IsEnum(EVENT_TYPE)
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
  @Type(() => AddressDTO)
  portOfEntry: AddressDTO

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => AddressDTO)
  portOfDestination: AddressDTO

  @IsNotEmpty()
  @IsString()
  countryOfDestination: string  

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => AddressDTO)
  @ValidateIf(o => o.eventType === EVENT_TYPE.TRANSFER_CUSTODY)
  receiptLocation?: AddressDTO

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
