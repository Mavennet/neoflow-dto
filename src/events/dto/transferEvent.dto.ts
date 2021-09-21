import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsEnum,
  IsLatitude,
  IsLongitude,
  IsDateString,
  IsNumberString,
  Matches,
  ValidateNested
} from 'class-validator'
import { Type } from 'class-transformer'
import { EVENT_TYPE } from './event.dto'
import { AddressDTO } from '../../general/dto/address.dto'

export class TransferEventDTO {
  @IsNotEmpty()
  @IsEnum(EVENT_TYPE)
  eventName: EVENT_TYPE

  @IsNotEmpty()
  @IsDateString()
  timestamp: string

  @IsNotEmpty()
  @IsString()
  address: string

  @IsNotEmpty()
  @IsLatitude()
  latitude: string

  @IsNotEmpty()
  @IsLongitude()
  longitude: string

  @IsNotEmpty()
  @IsString()
  @Matches(/^did:/)
  eventSubmitter: string

  @IsNotEmpty()
  @IsNumberString()
  price: string

  @IsNotEmpty()
  @IsString()
  @Matches(/^did:/)
  sender: string

  @IsOptional()
  @IsString()
  @Matches(/^did:/)
  receiver: string

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
