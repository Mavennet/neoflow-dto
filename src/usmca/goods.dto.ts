import { Equals, IsEnum, IsNotEmpty, IsString } from 'class-validator'
import { JSON_TYPE } from '../general'
import { ApiProperty } from '@nestjs/swagger'
import { ORIGIN_CRITERIA } from './constants/originCriteria'

export class GoodsDTO {
  @IsString()
  @Equals(JSON_TYPE.USMCA_PRODUCT)
  @IsNotEmpty()
  @ApiProperty()
  type: JSON_TYPE.USMCA_PRODUCT

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  streamType: string

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  ch27TariffClassification: string

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  ch99TariffClassification: string

  @IsEnum(ORIGIN_CRITERIA)
  @IsNotEmpty()
  @ApiProperty()
  originCriteria: ORIGIN_CRITERIA

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  countryOfOrigin: string
}
