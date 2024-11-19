import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { ArrayMinSize, IsArray, IsNotEmpty, IsOptional, IsString, IsUrl, MaxLength } from 'class-validator'
import type { JSON_TYPE } from '../constants'

export class IssuerDTO {
  @ApiProperty({
    description: "Array of types, expected to be ['Organization']",
    readOnly: true,
    default: ['Organization'],
    enum: ['Organization']
  })
  @IsArray()
  @ArrayMinSize(1)
  type: JSON_TYPE[]

  @ApiProperty({
    description: "Issuer's identifier, typically a Decentralized Identifier (DID)",
    format: 'uri'
  })
  @IsNotEmpty()
  @IsString()
  @IsUrl()
  id: string

  @ApiPropertyOptional({
    description: 'URI to a remote logo file, or a `data:` scheme URI of an encoded logo',
    format: 'uri',
    maxLength: 512000
  })
  @IsOptional()
  @IsString()
  @IsUrl()
  @MaxLength(512000)
  logo?: string

  @ApiPropertyOptional({
    description: "Issuing organization's name"
  })
  @IsOptional()
  @IsString()
  name?: string

  @ApiPropertyOptional({
    description: 'The Tax / Fiscal ID of the organization or person, e.g., the TIN in the US or the EORI in EU'
  })
  @IsOptional()
  @IsString()
  taxId?: string

  @ApiPropertyOptional({
    description: "Issuing organization's website URL",
    format: 'uri'
  })
  @IsOptional()
  @IsString()
  @IsUrl()
  url?: string

  @ApiPropertyOptional({
    description: 'Street address as free form text'
  })
  @IsOptional()
  @IsString()
  street?: string

  @ApiPropertyOptional({
    description: 'The locality in which the street address is located, e.g., city or town'
  })
  @IsOptional()
  @IsString()
  locality?: string

  @ApiPropertyOptional({
    description: 'Province or state in abbreviated format'
  })
  @IsOptional()
  @IsString()
  region?: string

  @ApiPropertyOptional({
    description: 'Postal code for the address'
  })
  @IsOptional()
  @IsString()
  postalCode?: string

  @ApiPropertyOptional({
    description: 'The two-letter ISO 3166-1 alpha-2 country code'
  })
  @IsOptional()
  @IsString()
  country?: string

  @ApiPropertyOptional({
    description: 'Name of the person issuing on behalf of the organization'
  })
  @IsOptional()
  @IsString()
  representativeName?: string

  @ApiPropertyOptional({
    description: 'Job title of the person issuing on behalf of the organization'
  })
  @IsOptional()
  @IsString()
  jobTitle?: string

  @ApiPropertyOptional({
    description: 'Contact email'
  })
  @IsOptional()
  @IsString()
  email?: string

  @ApiPropertyOptional({
    description: 'Contact phone number'
  })
  @IsOptional()
  @IsString()
  phoneNumber?: string
}
