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
import { ApiProperty } from '@nestjs/swagger'

export class TransferOwnershipConfirmationDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  transferOwnershipRequestId: number

  @ApiProperty()
  @IsOptional()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => PlaceDTO)
  portOfEntry?: PlaceDTO

  @ApiProperty()
  @IsOptional()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => PlaceDTO)
  portOfDestination?: PlaceDTO

  @ApiProperty()
  @IsOptional()
  @IsString()
  countryOfDestination?: string

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  confirmationStatus: boolean

  @ApiProperty()
  @IsOptional()
  @IsString()
  comment?: string

  @ApiProperty()
  @ValidateIf(o => o.confirmationStatus === false)
  @IsNotEmpty()
  @IsBoolean()
  hasDocuments: boolean
}
