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
import { COMPACT_PlaceDTO } from '../../../general'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { AddressDTO } from '../../../general/dto/address.dto'
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

  @IsNotEmpty()
  @ApiProperty()
  @IsBoolean()
  confirmationStatus: boolean

  @IsOptional()
  @ApiProperty()
  @IsString()
  comment: string

  @ValidateIf((o) => o.confirmationStatus === false)
  @IsNotEmpty()
  @ApiProperty()
  @IsBoolean()
  hasDocuments: boolean
}
