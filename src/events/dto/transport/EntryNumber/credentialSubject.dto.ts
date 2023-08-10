import { ApiProperty } from '@nestjs/swagger'
import { ArrayNotEmpty, IsArray, IsNotEmpty, IsString, Validate } from 'class-validator'
import { JSON_TYPE } from '../../../../general/constants'

export class EntryNumberCredentialSubjectDTO {
  @ApiProperty()
  @IsArray()
  @ArrayNotEmpty()
  @Validate((o) => o.type.includes(JSON_TYPE.ENTRY_NUMBER))
  type: JSON_TYPE[]

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  entryNumber: string
}
