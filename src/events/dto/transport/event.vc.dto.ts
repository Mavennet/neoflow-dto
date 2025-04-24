import { Type } from 'class-transformer'
import { IsNotEmpty, ValidateNested } from 'class-validator'
import { CredentialDTO } from '../../../credentials'
import { TransportEventCredentialSubjectDTO } from './event.credentialSubject.dto'

export class TransportStartVCDTO extends CredentialDTO<TransportEventCredentialSubjectDTO> {
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => TransportEventCredentialSubjectDTO)
  credentialSubject: TransportEventCredentialSubjectDTO
}
