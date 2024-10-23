import { ProductDTO as ProductDTOBase } from '@mavennet/traceability-dto'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import {
  Equals,
  IsEnum,
  IsNotEmpty,
  IsNotEmptyObject,
  IsOptional,
  IsString,
  ValidateIf,
  ValidateNested
} from 'class-validator'
import { JSON_TYPE } from '../../general/constants'
import { MeasurementDTO } from '../../general/dto'
import { PRODUCT_NAME } from '../constants'

export class ProductDTO extends ProductDTOBase {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Equals(JSON_TYPE.PRODUCT)
  type: JSON_TYPE.PRODUCT

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(PRODUCT_NAME)
  name: PRODUCT_NAME

  @ApiProperty()
  @IsOptional()
  @ValidateIf((o) => o.name === PRODUCT_NAME.CRUDE_OIL)
  @IsNotEmpty()
  category?: string

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
