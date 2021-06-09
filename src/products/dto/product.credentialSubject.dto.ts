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

export class ProductCredentialSubjectDTO extends ProductCredentialSubjectDTOBase {	
  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(JSON_TYPE_METAL, { each: true })
  @Validate(o => o.type === [JSON_TYPE_METAL.METAL_PRODUCT])
  type: JSON_TYPE_METAL[]

  @IsNotEmpty()
  @IsNumberString()
  @ValidateIf(o => o.product.name !== PRODUCT_NAME.HEAT)
  HSCode: string

  @IsNotEmpty()
  @IsNumberString()
  @ValidateIf(o => o.product.name === PRODUCT_NAME.HEAT)
  heatNumber: string

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => ProductDTO)
  product: ProductDTO

  @IsOptional()
  @IsString()
  grade?: string
}
