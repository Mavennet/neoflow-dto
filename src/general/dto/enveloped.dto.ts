import { ApiProperty } from '@nestjs/swagger'
import { IsArray, IsNotEmpty } from 'class-validator'
import { type EnvelopedVerifiableCredential } from '../../credentials'

export class CORE_EnvelopedVCDTO {
  @ApiProperty()
  @IsArray()
  @IsNotEmpty()
  vcs: EnvelopedVerifiableCredential[]
}
