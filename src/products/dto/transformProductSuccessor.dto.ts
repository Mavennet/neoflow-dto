import { IsNotEmpty, IsUUID, IsString, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { ProductCredentialSubjectDTO } from './productCredentialSubject.dto'
import { ProductVCDTO } from './product.vc.dto'

export class TransformProductSuccessorDTO {
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

  @IsNotEmpty()
  @IsUUID()
  identifier: string

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ProductCredentialSubjectDTO)
  credentialSubjects: ProductCredentialSubjectDTO
}
