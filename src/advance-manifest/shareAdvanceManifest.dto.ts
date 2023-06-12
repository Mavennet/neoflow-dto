import { IsNotEmpty, IsUUID, IsNumber } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class ShareAdvanceManifestDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  advanceManifestId: string

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  orgId: number
}
