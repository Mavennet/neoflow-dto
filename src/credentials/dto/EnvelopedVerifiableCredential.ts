import { ApiProperty } from '@nestjs/swagger'
import { ArrayMinSize, IsArray, IsNotEmpty, IsString, IsUrl, Validate } from 'class-validator'

export class EnvelopedVerifiableCredential {
  @ApiProperty()
  @IsArray()
  @ArrayMinSize(1)
  @IsUrl({}, { each: true })
  @Validate((o) => o['@context'].includes('https://www.w3.org/ns/credentials/v2'))
  '@context': string[]

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  id: string

  @ApiProperty()
  @IsString({ each: true })
  @ArrayMinSize(1)
  @Validate((o) => o.type.includes('EnvelopedVerifiableCredential'))
  type: string[]
}
