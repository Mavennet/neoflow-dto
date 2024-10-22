import { ApiProperty } from '@nestjs/swagger'
import { Equals, IsNotEmpty, IsString, Validate } from 'class-validator'
import { JSON_TYPE } from '../../../../general/constants'

export class EntryNumberCredentialSubjectDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Equals(JSON_TYPE.ENTRY_NUMBER)
  type: JSON_TYPE.ENTRY_NUMBER

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  entryNumber: string
}
