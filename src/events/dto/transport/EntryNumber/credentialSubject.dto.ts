import { ApiProperty } from '@nestjs/swagger'
import { ArrayNotEmpty, IsArray, IsBoolean, IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator'
import { JSON_TYPE } from '../../../../general/constants'

export class EntryNumberCredentialSubjectDTO {
  @ApiProperty()
  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(JSON_TYPE, { each: true })
  type: JSON_TYPE[]

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  entryNumber: string

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  usmca: boolean

  @ApiProperty({ required: false })
  @IsOptional()
  @IsBoolean()
  selfProduced?: boolean
}
