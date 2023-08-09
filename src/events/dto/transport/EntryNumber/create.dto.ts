import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsNotEmptyObject, ValidateNested, IsString } from 'class-validator'
import { Type } from 'class-transformer'
import { EntryNumberEventVCDTO } from './event.vc.dto'
import { EntryNumberCredentialSubjectDTO } from '.'

export class CreateEntryNumberDTOBase {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  productId: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  eventId: string
}

export class CreateEntryNumberDTO extends CreateEntryNumberDTOBase {
  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => EntryNumberCredentialSubjectDTO)
  credentialSubject: EntryNumberCredentialSubjectDTO
}

export class CORE_CreateEntryNumberDTO extends CreateEntryNumberDTOBase {
  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => EntryNumberEventVCDTO)
  eventVC: EntryNumberEventVCDTO
}
