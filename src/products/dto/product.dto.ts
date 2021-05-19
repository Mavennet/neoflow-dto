import {
  IsNotEmpty,
  IsEnum
} from 'class-validator'
import {
  ProductDTO as ProductDTOBase  
} from 'mavennet-dto'
import { PRODUCT_NAME } from '../constants'

export class ProductDTO extends ProductDTOBase {
  @IsNotEmpty()
  @IsEnum(PRODUCT_NAME)
  name: PRODUCT_NAME
}
