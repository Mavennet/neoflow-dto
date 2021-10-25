import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsOptional,
  IsBoolean,
  IsString,
  IsNumberString,
  Matches,
  ValidateNested
} from 'class-validator'
import { COMPACT_PlaceDTO } from '../../../general'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { AddressDTO } from '../../../general/dto/address.dto'
import { Type } from 'class-transformer'

export class COMPACT_TransferCustodyRequestDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  productId: string

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

export class TransferCustodyRequestDTO {
  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  productId: string

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

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  hasDocuments: boolean
}
