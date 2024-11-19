import { CredentialDTO } from '../../credentials'
import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsNotEmpty, ValidateNested } from 'class-validator'
import { ProductCredentialSubjectDTO } from './productCredentialSubject.dto'

export class ProductVCDTO extends CredentialDTO<ProductCredentialSubjectDTO> {
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ProductCredentialSubjectDTO)
  @ApiProperty()
  declare credentialSubject: ProductCredentialSubjectDTO
}
