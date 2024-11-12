import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, ValidateNested, IsUUID } from 'class-validator'
import { EnvelopedVerifiableCredential } from '../credentials'
import { Type } from 'class-transformer'
import { AdvanceManifestVCDTO } from './advanceManifest.vc.dto'

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

// TODO: Remove once Oil Advance Manifest uses enveloped credential
export class CORE_AdvanceManifestDTO_OIL {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  eventId: string

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => AdvanceManifestVCDTO)
  eventVC: AdvanceManifestVCDTO
}
