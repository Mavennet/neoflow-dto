import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, ValidateNested, IsUUID } from 'class-validator'
import { EnvelopedVerifiableCredential } from '../credentials'
import { Expose, Type } from 'class-transformer'

export class CORE_ProducerDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  producerId: string

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => EnvelopedVerifiableCredential)
  producerVC: EnvelopedVerifiableCredential

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  producerName: string
}
