import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, ValidateNested, IsUUID } from 'class-validator'
import { EnvelopedVerifiableCredential } from '../credentials'
import { type AdvanceManifestVCDTO } from './advanceManifest.vc.dto'
import { Expose, Type } from 'class-transformer'

export class CORE_AdvanceManifestDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  eventId: string

  // TODO: ADD AdvnaceManifestVCDto
  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => EnvelopedVerifiableCredential)
  @Expose()
  eventVC: EnvelopedVerifiableCredential
}
