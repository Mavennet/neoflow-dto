import { IsArray, IsBoolean, IsNotEmpty, IsNotEmptyObject, IsNumber, IsString } from 'class-validator'
import { CreateOrganizationDTO as CreateOrganizationDTOBase } from '@mavennet/traceability-dto'

export class CreateOrganizationDTO extends CreateOrganizationDTOBase {
  @IsNotEmpty()
  @IsString()
  mid: string

  @IsNotEmpty()
  @IsString()
  cbpImporterRecord: string

  @IsNotEmptyObject()
  uwi: Map<string, string>

  @IsNotEmpty()
  @IsString()
  userPoolID: string

  @IsNotEmpty()
  @IsString()
  adminAppClientID: string

  @IsNotEmpty()
  @IsBoolean()
  isNF: boolean;

  @IsNotEmpty()
  @IsBoolean()
  isShipper: boolean;

  @IsNotEmpty()
  @IsBoolean()
  isCheckToken: boolean;

  @IsNotEmpty()
  @IsArray()
  alias: string[];

  @IsNotEmpty()
  @IsString()
  profile: string;

  @IsNotEmpty()
  @IsNumber()
  portOfArrivalID: number;
}
