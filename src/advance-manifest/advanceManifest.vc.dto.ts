import { Type } from 'class-transformer'
import { IsNotEmpty, ValidateNested } from 'class-validator'
import { CredentialDTO } from '../credentials'
import { AdvanceManifestCredentialSubjectDTO } from './advanceManifest.credentialSubject.dto'

export class AdvanceManifestVCDTO extends CredentialDTO<AdvanceManifestCredentialSubjectDTO> {
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => AdvanceManifestCredentialSubjectDTO)
  credentialSubject: AdvanceManifestCredentialSubjectDTO
}
