import { IsNotEmpty, IsUUID, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { ProductVCDTO } from '../../../products/dto/product.vc.dto'

export class TransformProductSuccessorDTO {
  @IsNotEmpty()
  @IsUUID()
  productId: string

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ProductVCDTO)
  productVC: ProductVCDTO
}
