import { ApiProperty } from '@nestjs/swagger'
import { ArrayNotEmpty, IsArray, IsEnum, IsNotEmpty, IsString } from 'class-validator'
import { JSON_TYPE } from '../../../general'

export class IntentToImportCredentialSubjectDTO {
  @ApiProperty()
  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(JSON_TYPE, { each: true })
  type: JSON_TYPE[]

  @IsString()
  @IsNotEmpty()
  importIntent: string
}
