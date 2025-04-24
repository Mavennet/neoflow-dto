import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsNotEmpty, IsNotEmptyObject, IsString, ValidateNested } from 'class-validator'
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
