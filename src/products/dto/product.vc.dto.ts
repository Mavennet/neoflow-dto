import { VerifiableCredentialDTO } from '@mavennet/traceability-dto'
import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsNotEmpty, ValidateNested } from 'class-validator'
import { ProductCredentialSubjectDTO } from './productCredentialSubject.dto'

export class ProductVCDTO
  extends VerifiableCredentialDTO
  implements Omit<VerifiableCredentialDTO, 'credentialSubject'> {
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ProductCredentialSubjectDTO)
  @ApiProperty()
  declare credentialSubject: ProductCredentialSubjectDTO
}
