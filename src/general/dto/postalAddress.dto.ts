import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { ArrayNotEmpty, IsArray, IsNotEmpty, IsOptional, IsString, Validate } from 'class-validator'
import { JSON_TYPE } from '../constants'

export abstract class PostalAddressDTO {
  @ApiProperty()
  @IsArray()
  @ArrayNotEmpty()
  @Validate((o) => o.type.includes(JSON_TYPE.POSTAL_ADDRESS))
  type: JSON_TYPE[]

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  streetAddress?: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  addressLocality: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  addressRegion: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  postalCode?: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  addressCountry: string
}

export abstract class COMPACT_PostalAddressDTO {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  organizationName?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  streetAddress?: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  addressLocality: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  addressRegion: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  postalCode?: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  addressCountry: string
}
