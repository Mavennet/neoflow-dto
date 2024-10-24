import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, ValidateNested, IsUUID } from 'class-validator'
import { EnvelopedVerifiableCredential } from '../credentials'
import { Type } from 'class-transformer'

export class CORE_AdvanceManifestDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  eventId: string

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => EnvelopedVerifiableCredential)
  eventVC: EnvelopedVerifiableCredential
}
