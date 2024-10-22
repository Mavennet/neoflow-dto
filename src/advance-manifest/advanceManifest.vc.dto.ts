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

export class AdvanceManifestVCDTO {
  @IsArray()
  @ArrayMinSize(1)
  '@context': string[]

  @IsNotEmpty()
  id: string

  @IsArray()
  @ArrayMinSize(2)
  @ArrayMaxSize(2)
  @ValidateIf((o) => o.type.includes('VerifiableCredential') && o.type.includes('MonthlyAdvanceManifestCredential'))
  type: string[]

  @IsOptional()
  @IsDateString()
  validFrom?: string | Date

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => AdvanceManifestCredentialSubjectDTO)
  credentialSubject: AdvanceManifestCredentialSubjectDTO
}
