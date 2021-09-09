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
import { MeasurementDTO, COMPACT_MeasurementDTO, COMPACT_OrganizationDTO } from '../../general'
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
  @Type(() => COMPACT_MeasurementDTO)
  weight: COMPACT_MeasurementDTO

  @ApiPropertyOptional()
  @IsOptional()
  @ValidateNested()
  @Type(() => COMPACT_MeasurementDTO)
  width?: COMPACT_MeasurementDTO

  @ApiPropertyOptional()
  @IsOptional()
  @ValidateNested()
  @Type(() => COMPACT_MeasurementDTO)
  length?: COMPACT_MeasurementDTO

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => COMPACT_OrganizationDTO)
  manufacturer: COMPACT_OrganizationDTO

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description: string
}