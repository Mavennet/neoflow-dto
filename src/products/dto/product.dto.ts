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

export class ProductDTO extends ProductDTOBase {
  @IsNotEmpty()
  @IsEnum(PRODUCT_NAME)
  name: PRODUCT_NAME

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => MeasurementDTO)
  weight: MeasurementDTO

  @IsOptional()
  @IsString()
  id?: string
}
