import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsOptional,
  IsBoolean,
  IsString,
  Matches,
  ValidateNested
} from 'class-validator'
import { Type } from 'class-transformer'
import { PlaceDTO } from '../../../general'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export class TransferCustodyRequestDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  productId: string

  @ApiPropertyOptional()
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
