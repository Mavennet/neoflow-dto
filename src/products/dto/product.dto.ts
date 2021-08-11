import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsOptional,
  IsEnum,
  IsString,
  ValidateNested
} from 'class-validator'
import { Type } from 'class-transformer'
import { PRODUCT_NAME } from '../constants'
import { MeasurementDTO, Measurement, Organization } from '../../general'
import {
  ProductDTO as ProductDTOBase
} from 'mavennet-dto'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export class ProductDTO extends ProductDTOBase {
  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(PRODUCT_NAME)
  name: PRODUCT_NAME

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => MeasurementDTO)
  weight: MeasurementDTO

  @ApiPropertyOptional()
  @IsOptional()
  @ValidateNested()
  @Type(() => MeasurementDTO)
  length?: MeasurementDTO

  @ApiPropertyOptional()
  @IsOptional()
  @ValidateNested()
  @Type(() => MeasurementDTO)
  width?: MeasurementDTO

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  id?: string
}

export class ProductBrief {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  id: string

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(PRODUCT_NAME)
  name: PRODUCT_NAME

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => Measurement)
  weight: Measurement

  @ApiPropertyOptional()
  @IsOptional()
  @ValidateNested()
  @Type(() => Measurement)
  width?: Measurement

  @ApiPropertyOptional()
  @IsOptional()
  @ValidateNested()
  @Type(() => Measurement)
  length?: Measurement

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => Organization)
  manufacturer: Organization

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description: string
}