import { IsArray, IsBoolean, IsNotEmpty, IsNumber, IsString, Matches, IsEnum } from 'class-validator'
import { ORGANIZATION_ROLE } from '../constants'

export class CreateOrganizationDTO {
  @IsNotEmpty()
  @IsString()
  name: string

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
