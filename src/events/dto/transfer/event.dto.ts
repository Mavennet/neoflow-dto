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
import { EVENT_TYPE } from '../../constants/eventType'
import { AddressDTO } from '../../../general/dto/address.dto'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export class AGENT_TransferEventDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(EVENT_TYPE)
  eventName: EVENT_TYPE

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  timestamp: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  address: string

  @ApiProperty()
  @IsNotEmpty()
  @IsLatitude()
  latitude: string

  @ApiProperty()
  @IsNotEmpty()
  @IsLongitude()
  longitude: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Matches(/^did:/)
  eventSubmitter: string

  @ApiProperty()
  @IsNotEmpty()
  @IsNumberString()
  price: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Matches(/^did:/)
  sender: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @Matches(/^did:/)
  receiver?: string

  @ApiPropertyOptional()
  @IsOptional()
  @ValidateNested()
  @Type(() => AddressDTO)
  portOfArrival?: AddressDTO

  @ApiPropertyOptional()
  @IsOptional()
  @ValidateNested()
  @Type(() => AddressDTO)
  portOfDestination?: AddressDTO

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  countryOfDestination?: string

  @ApiPropertyOptional()
  @IsOptional()
  @ValidateNested()
  @Type(() => AddressDTO)
  receiptLocation?: AddressDTO
}
