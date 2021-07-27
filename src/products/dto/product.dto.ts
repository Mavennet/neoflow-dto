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
import { MeasurementDTO } from '../../general'
import {
  ProductDTO as ProductDTOBase
} from 'mavennet-dto'
import { ApiProperty } from '@nestjs/swagger'

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

  @ApiProperty()
  @IsOptional()
  @IsString()
  id?: string
}
