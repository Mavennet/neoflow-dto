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

export class TransportationPlannedDTO {
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

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  scheduledDate: string


  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  hasDocuments: boolean
}
