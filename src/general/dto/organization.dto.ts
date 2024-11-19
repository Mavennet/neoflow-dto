import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsEmail,
  ValidateNested,
  IsArray,
  ArrayNotEmpty,
  IsEnum,
  Validate
} from 'class-validator'
import { Transform, Type } from 'class-transformer'
import { JSON_TYPE } from '../constants'
import { PostalAddressDTO, COMPACT_PostalAddressDTO } from './postalAddress.dto'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export abstract class OrganizationDTO {
  @ApiProperty()
  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(JSON_TYPE, { each: true })
  @Validate((o) => o.type.includes(JSON_TYPE.ORGANIZATION))
  type: JSON_TYPE[]

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @Transform(({ value }) => (value !== undefined ? value : undefined), { toClassOnly: true })
  did?: string

  @ApiPropertyOptional()
  @IsOptional()
  @ValidateNested()
  @Type(() => PostalAddressDTO)
  @Transform(({ value }) => (value !== undefined ? value : undefined), { toClassOnly: true })
  address?: PostalAddressDTO

  @ApiPropertyOptional()
  @IsOptional()
  @IsEmail()
  email?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString() // would be ideal to use IsPhoneNumber(REGION_CODE)
  phoneNumber?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString() // would be ideal to use IsPhoneNumber(REGION_CODE)
  faxNumber?: string
}

export abstract class COMPACT_OrganizationDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  did?: string

  @ApiPropertyOptional()
  @IsOptional()
  @ValidateNested()
  @Type(() => COMPACT_PostalAddressDTO)
  address?: COMPACT_PostalAddressDTO

  @ApiPropertyOptional()
  @IsOptional()
  @IsEmail()
  email?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString() // would be ideal to use IsPhoneNumber(REGION_CODE)
  phoneNumber?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString() // would be ideal to use IsPhoneNumber(REGION_CODE)
  faxNumber?: string
}
