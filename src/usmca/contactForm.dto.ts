import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsNotEmpty, IsNotEmptyObject, IsString, ValidateNested, IsOptional } from 'class-validator'
import { PostalAddressDTO } from '../general'

export class ContactFormDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  organization: string

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  title: string

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  firstName: string

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  lastName: string

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  phone: string

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  email: string

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => PostalAddressDTO)
  @ApiProperty()
  location: PostalAddressDTO
}

export class DraftPostalAddressDTO {
  @IsOptional()
  @ApiProperty({ required: false })
  type?: string[]

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  streetAddress?: string

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  addressLocality?: string

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  addressRegion?: string

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  postalCode?: string

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  addressCountry?: string
}

export class DraftContactFormDTO {
  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  organization?: string

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  title?: string

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  firstName?: string

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  lastName?: string

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  phone?: string

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  email?: string

  @ValidateNested()
  @IsOptional()
  @Type(() => DraftPostalAddressDTO)
  @ApiProperty({ required: false, type: DraftPostalAddressDTO })
  location?: DraftPostalAddressDTO
}
