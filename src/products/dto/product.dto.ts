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
  ValidateNested,
  IsArray,
  ArrayNotEmpty,
  Validate,
  IsUUID,
  ArrayContains
} from 'class-validator'
import { JSON_TYPE, JSON_TYPE_NF } from '../../general/constants'
import { MeasurementDTO, OrganizationDTO } from '../../general/dto'
import { PRODUCT_NAME } from '../constants'

export abstract class ProductDTOBase {
  @ApiProperty()
  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(JSON_TYPE, { each: true })
  @Validate((o) => o.type.includes(JSON_TYPE.PRODUCT))
  abstract type: any

  @ApiProperty()
  @IsOptional()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => OrganizationDTO)
  manufacturer?: OrganizationDTO

  @ApiPropertyOptional()
  @IsOptional()
  @IsUUID()
  productID?: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  abstract name: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string
}

export class ProductDTO extends ProductDTOBase {
  @ApiProperty()
  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(JSON_TYPE_NF, { each: true })
  @ArrayContains([JSON_TYPE_NF.PRODUCT])
  type: JSON_TYPE_NF[]

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
