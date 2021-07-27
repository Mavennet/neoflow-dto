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
import { Type } from 'class-transformer'
import { PlaceDTO } from '../../../general'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export class TransferOwnershipConfirmationDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  transferOwnershipRequestId: number

  @ApiPropertyOptional()
  @IsOptional()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => PlaceDTO)
  portOfEntry?: PlaceDTO

  @ApiPropertyOptional()
  @IsOptional()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => PlaceDTO)
  portOfDestination?: PlaceDTO

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
