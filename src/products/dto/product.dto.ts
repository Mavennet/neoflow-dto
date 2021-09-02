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
import { MeasurementDTO, FLAT_MeasurementDTO, FLAT_OrganizationDTO } from '../../general'
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
  @Type(() => FLAT_MeasurementDTO)
  weight: FLAT_MeasurementDTO

  @ApiPropertyOptional()
  @IsOptional()
  @ValidateNested()
  @Type(() => FLAT_MeasurementDTO)
  width?: FLAT_MeasurementDTO

  @ApiPropertyOptional()
  @IsOptional()
  @ValidateNested()
  @Type(() => FLAT_MeasurementDTO)
  length?: FLAT_MeasurementDTO

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => FLAT_OrganizationDTO)
  manufacturer: FLAT_OrganizationDTO

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description: string
}