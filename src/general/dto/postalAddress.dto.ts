import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { Equals, IsNotEmpty, IsOptional, IsString } from 'class-validator'
import { JSON_TYPE } from '../constants'

export abstract class PostalAddressDTO {
  @IsString()
  @Equals(JSON_TYPE.POSTAL_ADDRESS)
  @IsNotEmpty()
  @ApiProperty()
  type: JSON_TYPE.POSTAL_ADDRESS

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
