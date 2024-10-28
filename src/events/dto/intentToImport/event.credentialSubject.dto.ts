import { ApiProperty } from '@nestjs/swagger'
import { ArrayNotEmpty, IsArray, IsEnum, IsNotEmpty, IsString } from 'class-validator'
import { JSON_TYPE_NF } from '../../../general'

export class IntentToImportCredentialSubjectDTO {
  @ApiProperty()
  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(JSON_TYPE_NF, { each: true })
  type: JSON_TYPE_NF[]

  @IsString()
  @IsNotEmpty()
  importIntent: string
}
