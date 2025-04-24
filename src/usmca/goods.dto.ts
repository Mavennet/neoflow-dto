import { Equals, IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator'
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

export class DraftGoodsDTO {
  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  type?: string | JSON_TYPE.USMCA_PRODUCT

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  streamType?: string

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  ch27TariffClassification?: string

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  ch99TariffClassification?: string

  @IsOptional()
  @IsEnum(ORIGIN_CRITERIA)
  @ApiProperty({ required: false, enum: ORIGIN_CRITERIA })
  originCriteria?: ORIGIN_CRITERIA

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  countryOfOrigin?: string
}
