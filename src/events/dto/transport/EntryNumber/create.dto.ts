import { ApiProperty } from '@nestjs/swagger'
import {
  IsUUID,
  IsNotEmpty,
  IsNotEmptyObject,
  ValidateNested,
  IsString,
  ValidateIf,
  IsObject,
  IsOptional
} from 'class-validator'
import { Type } from 'class-transformer'
import { EntryNumberCredentialSubjectDTO } from '.'
import { EnvelopedVerifiableCredential } from '@mavennet/traceability-dto'

export class CreateEntryNumberDTOBase {
  @ApiProperty()
  @ValidateIf((o) => !o.gasShipmentId || o.productId)
  @IsNotEmpty()
  @IsUUID()
  productId: string

  @ApiProperty()
  @ValidateIf((o) => !o.productId || o.gasShipmentId)
  @IsNotEmpty()
  @IsUUID()
  gasShipmentId: string
}

export class CreateEntryNumberDTO extends CreateEntryNumberDTOBase {
  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => EntryNumberCredentialSubjectDTO)
  credentialSubject: EntryNumberCredentialSubjectDTO

  @ApiProperty()
  @IsObject()
  @IsOptional()
  portEntry?: any
}

export class CORE_CreateEntryNumberDTO extends CreateEntryNumberDTOBase {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  eventId: string

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => EnvelopedVerifiableCredential)
  eventVC: EnvelopedVerifiableCredential
}
