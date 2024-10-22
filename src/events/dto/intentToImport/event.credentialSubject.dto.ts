import { ApiProperty } from '@nestjs/swagger'
import { Equals, IsNotEmpty, IsString, Validate } from 'class-validator'
import { JSON_TYPE_NF } from '../../../general'

export class IntentToImportCredentialSubjectDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Equals(JSON_TYPE_NF.INTENT_TO_IMPORT)
  type: JSON_TYPE_NF.INTENT_TO_IMPORT

  @IsString()
  @IsNotEmpty()
  importIntent: string
}
