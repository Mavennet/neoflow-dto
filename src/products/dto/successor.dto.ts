import { IsNotEmpty, IsString, ValidateNested, IsUUID } from 'class-validator'

import { Type } from 'class-transformer'
import { ProductVCDTO } from './product.vc.dto'

export class SuccessorDTO {
  @IsNotEmpty()
  @IsUUID()
  productId: string

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ProductVCDTO)
  productVC: ProductVCDTO

  @IsNotEmpty()
  @IsString()
  productVCHash: string
}
