import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { Equals, IsArray, IsNotEmpty, IsNumberString, IsOptional, IsUrl } from 'class-validator'

export class CredentialStatusDTO {
  @ApiPropertyOptional()
  @IsOptional()
  @IsUrl({ require_tld: process.env.NODE_ENV !== 'development' })
  id?: string

  @ApiProperty()
  @IsArray()
  @Equals('BitstringStatusListEntry')
  type: string

  @ApiPropertyOptional()
  @IsNumberString()
  @IsNotEmpty()
  statusListIndex: string

  @ApiPropertyOptional()
  @IsNumberString()
  @IsNotEmpty()
  statusPurpose: string

  @ApiPropertyOptional()
  @IsOptional()
  statusListCredential?: string
}
