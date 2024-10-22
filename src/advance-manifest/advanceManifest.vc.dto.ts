import { Type } from 'class-transformer'
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsDateString,
  IsNotEmpty,
  IsOptional,
  ValidateIf,
  ValidateNested
} from 'class-validator'
import { AdvanceManifestCredentialSubjectDTO } from './advanceManifest.credentialSubject.dto'
import { CredentialDTO } from '../credentials'

export class AdvanceManifestVCDTO extends CredentialDTO<AdvanceManifestCredentialSubjectDTO> {
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => AdvanceManifestCredentialSubjectDTO)
  credentialSubject: AdvanceManifestCredentialSubjectDTO
}
