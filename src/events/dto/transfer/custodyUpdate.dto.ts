import {
  IsBoolean,
  IsNotEmpty,
  IsNotEmptyObject,
  IsString,
  IsNumber,
  IsNumberString,
  IsOptional,
  ValidateNested,
  Matches
} from 'class-validator'
import { COMPACT_PlaceDTO } from '../../../general'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { AddressDTO } from '../../../general/dto/address.dto'
import { Type } from 'class-transformer'

export class COMPACT_TransferCustodyUpdateDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumberString()
  requestId: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumberString()
  contractId?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  countryOfDestination?: string

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => COMPACT_PlaceDTO)
  portOfEntry: COMPACT_PlaceDTO

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => COMPACT_PlaceDTO)
  portOfDestination: COMPACT_PlaceDTO

  @ApiPropertyOptional()
  @IsOptional()
  @ValidateNested()
  @Type(() => COMPACT_PlaceDTO)
  receiptLocation?: COMPACT_PlaceDTO

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Matches(/^did:/)
  receiver: string

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  hasDocuments: boolean
}

export class UpdateTransferCustodyRequestDTO {
  @IsNotEmpty()
  @ApiProperty()
  @IsNumber()
  requestId: number

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  @Matches(/^did:/)
  receiver: string

  @IsOptional()
  @ApiProperty()
  @ValidateNested()
  @Type(() => AddressDTO)
  portOfEntry: AddressDTO

  @IsOptional()
  @ApiProperty()
  @ValidateNested()
  @Type(() => AddressDTO)
  portOfArrival: AddressDTO

  @IsOptional()
  @ApiProperty()
  @ValidateNested()
  @Type(() => AddressDTO)
  portOfDestination: AddressDTO

  @IsOptional()
  @ApiProperty()
  @IsString()
  countryOfDestination: string

  @IsOptional()
  @ApiProperty()
  @ValidateNested()
  @Type(() => AddressDTO)
  receiptLocation: AddressDTO

  @IsNotEmpty()
  @ApiProperty()
  @IsBoolean()
  hasDocuments: boolean
}
