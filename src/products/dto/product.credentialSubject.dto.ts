import {
  IsOptional,
  IsNotEmpty,
  IsNotEmptyObject,
  IsNumberString,
  IsString,
  IsEnum,
  IsArray,
  ArrayNotEmpty,
  Validate,
  ValidateNested,
  ValidateIf
} from 'class-validator'
import { Type } from 'class-transformer'
import { PRODUCT_NAME } from '../constants'
import { JSON_TYPE_METAL } from '../../general'
import { ProductDTO } from './product.dto'
import {
  ProductCredentialSubjectDTO as ProductCredentialSubjectDTOBase
} from 'mavennet-dto'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export class ProductCredentialSubjectDTO extends ProductCredentialSubjectDTOBase {
  @ApiProperty()
  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(JSON_TYPE_METAL, { each: true })
  @Validate(o => o.type === [JSON_TYPE_METAL.METAL_PRODUCT])
  type: JSON_TYPE_METAL[]

  @ApiProperty()
  @IsNotEmpty()
  @IsNumberString()
  @ValidateIf(o => o.product.name !== PRODUCT_NAME.HEAT)
  HSCode: string

  @ApiProperty()
  @IsNotEmpty()
  @IsNumberString()
  @ValidateIf(o => o.product.name === PRODUCT_NAME.HEAT)
  heatNumber: string

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => ProductDTO)
  product: ProductDTO

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  grade?: string
}
