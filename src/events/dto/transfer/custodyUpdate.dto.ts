import {
  IsBoolean,
  IsNotEmpty,
  IsNotEmptyObject,
  IsString,
  IsNumberString,
  IsOptional,
  ValidateNested,
  Matches
} from 'class-validator'
import { Type } from 'class-transformer'
import { PlaceDTO, FLAT_PlaceDTO } from '../../../general'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export class FLAT_TransferCustodyUpdateDTO {
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
  @Type(() => FLAT_PlaceDTO)
  portOfEntry: FLAT_PlaceDTO

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => FLAT_PlaceDTO)
  portOfDestination: FLAT_PlaceDTO

  @ApiPropertyOptional()
  @IsOptional()
  @ValidateNested()
  @Type(() => FLAT_PlaceDTO)
  receiptLocation?: FLAT_PlaceDTO

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

export class TransferCustodyUpdateDTO {
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

  @ApiPropertyOptional()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => PlaceDTO)
  portOfEntry: PlaceDTO

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => PlaceDTO)
  portOfDestination: PlaceDTO

  @ApiPropertyOptional()
  @IsOptional()
  @ValidateNested()
  @Type(() => PlaceDTO)
  receiptLocation?: PlaceDTO

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
