import { IsNotEmpty, IsUUID, IsString, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { ProductCredentialSubjectDTO } from '../../../products/dto/productCredentialSubject.dto'
import { ProductVCDTO } from '../../../products/dto/product.vc.dto'

export class TransformProductSuccessorDTOBase {
  @IsNotEmpty()
  @IsUUID()
  identifier: string

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ProductCredentialSubjectDTO)
  credentialSubjects: ProductCredentialSubjectDTO
}
export class TransformProductSuccessorDTO extends TransformProductSuccessorDTOBase{
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
