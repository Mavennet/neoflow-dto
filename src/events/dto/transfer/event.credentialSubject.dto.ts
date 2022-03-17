import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsOptional,
  IsEnum,
  IsString,
  IsNumberString,
  ValidateNested,
  Matches
} from 'class-validator'
import { Type } from 'class-transformer'
import { AddressDTO } from '../../../general/dto/address.dto'
import { TRANSFER_EVENT_TYPE } from '../../constants'

export class CORE_TransferEventCredentialSubjectDTO {
  @IsNotEmpty()
  productId: string

  @IsNotEmpty()
  @IsString()
  @IsEnum(TRANSFER_EVENT_TYPE)
  eventType: TRANSFER_EVENT_TYPE

  @IsOptional()
  @IsString()
  description: string

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => AddressDTO)
  geo: AddressDTO

  @IsNotEmpty()
  @IsString()
  @Matches(/^did:/)
  eventCreator: string

  @IsOptional()
  @IsString()
  @Matches(/^did:/)
  sender: string

  @IsNotEmpty()
  @IsString()
  @Matches(/^did:/)
  receiver: string

  @IsNotEmpty()
  @IsNumberString()
  price: string

  @IsOptional()
  @ValidateNested()
  @Type(() => AddressDTO)
  portOfArrival: AddressDTO

  @IsOptional()
  @ValidateNested()
  @Type(() => AddressDTO)
  portOfDestination: AddressDTO

  @IsOptional()
  @IsString()
  countryOfDestination: string

  @IsOptional()
  @ValidateNested()
  @Type(() => AddressDTO)
  receiptLocation: AddressDTO
}

export class AGENT_TransferEventCredentialSubjectDTO extends CORE_TransferEventCredentialSubjectDTO {
  @IsNotEmpty()
  eventId: string

  @IsOptional()
  @ValidateNested()
  @Type(() => AddressDTO)
  portOfEntry: AddressDTO
}
