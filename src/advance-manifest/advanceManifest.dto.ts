import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, ValidateNested, IsUUID } from 'class-validator'
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
  @Type(() => AdvanceManifestVCDTO)
  eventVC: AdvanceManifestVCDTO
}
