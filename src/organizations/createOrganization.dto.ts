import { IsNotEmpty, IsNotEmptyObject, IsEnum, IsString, Matches, IsEmail, IsPhoneNumber } from 'class-validator'
import { ORGANIZATION_ROLE } from './constants'

export class CreateOrganizationDto {
  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
  @IsEmail()
  email: string

  @IsNotEmpty()
  @IsString()
  address: string

  @IsNotEmpty()
  @IsPhoneNumber('CA')
  phone: string

  @IsNotEmpty()
  @IsString()
  mid: string

  @IsNotEmpty()
  @IsString()
  cbpImporterRecord: string

  @IsNotEmpty()
  @IsEnum(ORGANIZATION_ROLE)
  role: ORGANIZATION_ROLE

  @IsNotEmpty()
  @IsString()
  @Matches(/^did:/)
  did: string

  @IsNotEmpty()
  @IsString()
  backendLink: string

  @IsNotEmptyObject()
  uwi: Map<string, string>
}
