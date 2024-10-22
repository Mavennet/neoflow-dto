import { CredentialDTO } from '@mavennet/traceability-dto'
import { Type } from 'class-transformer'
import { IsNotEmpty, ValidateNested } from 'class-validator'
import { OGBillOfLadingCredentialSubjectDTO } from './oilGas.event.credentialSubject.dto'

export class OGBillOfLadingVCDTO extends CredentialDTO<OGBillOfLadingCredentialSubjectDTO> {
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => OGBillOfLadingCredentialSubjectDTO)
  credentialSubject: OGBillOfLadingCredentialSubjectDTO
}
