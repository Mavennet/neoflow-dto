import { ApiProperty } from '@nestjs/swagger'
import { ArrayMinSize, IsOptional, IsString } from 'class-validator'

export class CredentialSubject {
  @ApiProperty()
  @IsString({ each: true })
  @ArrayMinSize(1)
  type: string[]

  @ApiProperty()
  @IsOptional()
  @IsString()
  id?: string;

  [key: string]: any
}
