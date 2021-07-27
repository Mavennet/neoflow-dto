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
import { PlaceDTO } from '../../../general'
import { ApiProperty } from '@nestjs/swagger'

export class TransferCustodyUpdateDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumberString()
  requestId: string

  @ApiProperty()
  @IsOptional()
  @IsString()
  countryOfDestination?: string

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => PlaceDTO)
  portOfEntry: PlaceDTO

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => PlaceDTO)
  portOfDestination: PlaceDTO

  @ApiProperty()
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
