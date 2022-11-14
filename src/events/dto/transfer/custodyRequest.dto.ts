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
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { PlaceDTO, COMPACT_PlaceDTO } from '../../../general'
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
  @ApiPropertyOptional()
  @ValidateNested()
  @Type(() => PlaceDTO)
  portOfEntry?: PlaceDTO

  @IsOptional()
  @ApiPropertyOptional()
  @ValidateNested()
  @Type(() => PlaceDTO)
  portOfArrival?: PlaceDTO

  @IsOptional()
  @ApiPropertyOptional()
  @ValidateNested()
  @Type(() => PlaceDTO)
  portOfDestination?: PlaceDTO

  @IsOptional()
  @ApiPropertyOptional()
  @IsString()
  countryOfDestination?: string

  @IsOptional()
  @ApiPropertyOptional()
  @ValidateNested()
  @Type(() => PlaceDTO)
  receiptLocation?: PlaceDTO

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  hasDocuments: boolean
}
