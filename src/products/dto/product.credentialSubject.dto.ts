import {
  IsNotEmptyObject,
  IsEnum,
  IsArray,
  ArrayNotEmpty,
  Validate,
  ValidateNested
} from 'class-validator'
import { Type } from 'class-transformer'
import { JSON_TYPE } from '../../general'
import { ProductDTO } from './product.dto'
import {
	ProductCredentialSubjectDTO as ProductCredentialSubjectDTOBase	
} from 'mavennet-dto'

export class ProductCredentialSubjectDTO extends ProductCredentialSubjectDTOBase {	
  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(JSON_TYPE, { each: true })
  @Validate(o => o.type === [JSON_TYPE.METAL_PRODUCT])
  type: JSON_TYPE[]

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => ProductDTO)
  product: ProductDTO
}
