import {
  IsOptional,
  IsNotEmptyObject,
  IsString,
  IsEnum,
  IsArray,
  ArrayNotEmpty,
  Validate,
  ValidateNested
} from 'class-validator'
import { Type } from 'class-transformer'
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

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => ProductDTO)
  product: ProductDTO

  @IsOptional()
  @IsString()
  grade: string
}
