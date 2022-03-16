import { IsNotEmpty, IsNotEmptyObject, IsEnum, IsString, Matches, IsEmail, IsPhoneNumber } from 'class-validator'

enum ROLES {
  CLIENT = 'client',
  AGENCY = 'agency',
  BROKER = 'broker'
}

export class CreateOrganizationDTO {
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
  @IsEnum(ROLES)
  role: ROLES

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
