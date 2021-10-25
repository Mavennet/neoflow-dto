import { IsNotEmpty, IsOptional, IsEnum, IsString, IsArray, ArrayNotEmpty, Validate } from 'class-validator'
import { JSON_TYPE } from '../constants'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export class PostalAddressDTO {
  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(JSON_TYPE, { each: true })
  @Validate((o) => o.type === [JSON_TYPE.POSTAL_ADDRESS])
  type: JSON_TYPE[]

  @IsOptional()
  @IsString()
  organizationName: string

  @IsOptional()
  @IsString()
  streetAddress: string

  @IsOptional()
  @IsString()
  addressLocality: string

  @IsOptional()
  @IsString()
  addressRegion: string

  @IsOptional()
  @IsString()
  postalCode: string

  @IsOptional()
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
