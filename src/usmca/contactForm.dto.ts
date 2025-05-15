import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsNotEmpty, IsString, ValidateNested, IsOptional } from 'class-validator'

export class ContactFormDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  organization: string

  @IsString()
  @IsOptional()
  @ApiProperty()
  title?: string

  @IsString()
  @IsOptional()
  @ApiProperty()
  firstName?: string

  @IsString()
  @IsOptional()
  @ApiProperty()
  lastName?: string

  @IsString()
  @IsOptional()
  @ApiProperty()
  phone?: string

  @IsString()
  @IsOptional()
  @ApiProperty()
  email?: string

  @IsOptional()
  @ValidateNested()
  @Type(() => DraftPostalAddressDTO)
  @ApiProperty()
  location?: DraftPostalAddressDTO
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
