import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsOptional,
  IsEnum,
  IsString,
  ValidateNested,
  IsArray,
  ArrayNotEmpty,
  Validate,
  ValidateIf
} from 'class-validator'
import { Type } from 'class-transformer'
import { JSON_TYPE } from '../../general/constants'
import { OrganizationDTO, MeasurementDTO } from '../../general/dto'
import { PRODUCT_NAME, CRUDE_STREAM } from '../constants'
import { ProductDTO as ProductDTOBase } from '@mavennet/traceability-dto'

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
  @ValidateIf((o) => o.name === PRODUCT_NAME.CRUDE_OIL)
  @IsNotEmpty()
  @IsEnum(CRUDE_STREAM)
  category: CRUDE_STREAM

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
}
