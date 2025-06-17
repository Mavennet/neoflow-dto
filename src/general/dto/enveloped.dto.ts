import { ApiProperty } from '@nestjs/swagger'
import { IsArray, IsNotEmpty, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { type EnvelopedVerifiableCredential } from '../../credentials'

export class WrappedEnvelopedVCDTO {
  @ApiProperty({ description: 'Identifier for the event in Neoflow' })
  @IsNotEmpty()
  eventId: string

  @ApiProperty({ description: 'The issued verifiable credential object' })
  @IsNotEmpty()
  vc: EnvelopedVerifiableCredential
}

export class CORE_EnvelopedVCDTO {
  @ApiProperty({ type: [WrappedEnvelopedVCDTO], description: 'List of wrapped verifiable credentials' })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => WrappedEnvelopedVCDTO)
  @IsNotEmpty()
  vcs: WrappedEnvelopedVCDTO[]
}
