import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNotEmptyObject,
  IsNumber,
  IsString,
  Matches,
  IsEmail,
  IsPhoneNumber,
  IsEnum
} from 'class-validator'
import { ORGANIZATION_ROLE } from '../constants'

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
  @IsEnum(ORGANIZATION_ROLE)
  role: ORGANIZATION_ROLE

  @IsNotEmpty()
  @IsString()
  @Matches(/^did:/)
  did: string

  @IsNotEmpty()
  @IsString()
  backendLink: string

  @IsNotEmpty()
  @IsString()
  mid: string

  @IsNotEmpty()
  @IsString()
  cbpImporterRecord: string

  @IsNotEmptyObject()
  uwi: string

  @IsNotEmpty()
  @IsString()
  userPoolID: string

  @IsNotEmpty()
  @IsString()
  adminAppClientID: string

  @IsNotEmpty()
  @IsBoolean()
  isNF: boolean

  @IsNotEmpty()
  @IsBoolean()
  isShipper: boolean

  @IsNotEmpty()
  @IsBoolean()
  isCheckToken: boolean

  @IsNotEmpty()
  @IsArray()
  alias: string[]

  @IsNotEmpty()
  @IsString()
  profile: string

  @IsNotEmpty()
  @IsNumber()
  portOfArrivalID: number
}
