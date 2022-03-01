import { IsNotEmpty, IsNotEmptyObject, IsEnum, IsString, Matches, IsEmail, IsPhoneNumber } from 'class-validator'
import { CreateOrganizationDTO as CreateOrganizationDTOBase } from '@mavennet/traceability-dto'


enum ROLES {
  CLIENT = 'client',
  AGENCY = 'agency',
  BROKER = 'broker'
}

export class CreateOrganizationDTO extends CreateOrganizationDTOBase{
  @IsNotEmpty()
  @IsString()
  mid: string

  @IsNotEmpty()
  @IsString()
  cbpImporterRecord: string

  @IsNotEmptyObject()
  uwi: Map<string, string>
}
