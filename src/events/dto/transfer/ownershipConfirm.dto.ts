import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsOptional,
  IsNumber,
  IsString,
  IsBoolean,
  ValidateIf,
  ValidateNested
} from 'class-validator'
import { COMPACT_PlaceDTO, PlaceDTO } from '../../../general'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { Type } from 'class-transformer'

export class COMPACT_TransferOwnershipConfirmationDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  transferOwnershipRequestId: number

  @ApiPropertyOptional()
  @IsOptional()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => COMPACT_PlaceDTO)
  portOfEntry?: COMPACT_PlaceDTO

  @ApiPropertyOptional()
  @IsOptional()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => COMPACT_PlaceDTO)
  portOfDestination?: COMPACT_PlaceDTO

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  countryOfDestination?: string

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  confirmationStatus: boolean

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  comment?: string

  @ApiProperty()
  @ValidateIf(o => o.confirmationStatus === false)
  @IsNotEmpty()
  @IsBoolean()
  hasDocuments: boolean
}

export class TransferOwnershipConfirmationDTO {
  @IsNotEmpty()
  @ApiProperty()
  @IsNumber()
  transferOwnershipRequestId: number

  @IsOptional()
  @ApiPropertyOptional()
  @ValidateNested()
  @Type(() => PlaceDTO)
  portOfEntry: PlaceDTO

  @IsOptional()
  @ApiPropertyOptional()
  @ValidateNested()
  @Type(() => PlaceDTO)
  portOfArrival: PlaceDTO

  @IsOptional()
  @ApiPropertyOptional()
  @ValidateNested()
  @Type(() => PlaceDTO)
  portOfDestination: PlaceDTO

  @IsOptional()
  @ApiPropertyOptional()
  @IsString()
  countryOfDestination: string

  @IsNotEmpty()
  @ApiProperty()
  @IsBoolean()
  confirmationStatus: boolean

  @IsOptional()
  @ApiPropertyOptional()
  @IsString()
  comment: string

  @ValidateIf((o) => o.confirmationStatus === false)
  @IsNotEmpty()
  @ApiProperty()
  @IsBoolean()
  hasDocuments: boolean
}
