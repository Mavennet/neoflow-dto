import { IsNotEmpty, IsString, IsUUID } from 'class-validator'

export class ProductHashDTO {
  @IsNotEmpty()
  @IsUUID()
  productId: string

  @IsNotEmpty()
  @IsString()
  productVCHash: string
}
