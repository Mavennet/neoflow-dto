import { ProductDTO as ProductDTOBase } from '@mavennet/traceability-dto'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import {
  ArrayNotEmpty,
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsNotEmptyObject,
  IsOptional,
  IsString,
  Validate,
  ValidateIf,
  ValidateNested
} from 'class-validator'
import { JSON_TYPE } from '../../general/constants'
import { MeasurementDTO } from '../../general/dto'
import { CRUDE_STREAM, PRODUCT_NAME } from '../constants'

export class ProductDTO extends ProductDTOBase {
  @ApiProperty()
  @IsArray()
  @ArrayNotEmpty()
  @Validate((o) => o.type.includes(JSON_TYPE.PRODUCT))
  type: JSON_TYPE[]

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(PRODUCT_NAME)
  name: PRODUCT_NAME

  @ApiProperty()
  @IsOptional()
  @ValidateIf((o) => o.name === PRODUCT_NAME.CRUDE_OIL)
  @IsNotEmpty()
  @IsEnum(CRUDE_STREAM)
  category?: CRUDE_STREAM

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => MeasurementDTO)
  sizeOrAmount: MeasurementDTO

  @ApiPropertyOptional()
  @IsOptional()
  @ValidateNested()
  @Type(() => MeasurementDTO)
  wight?: MeasurementDTO // fix attribute typo

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  sku?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  batchNumber?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  commodity?: string
}
