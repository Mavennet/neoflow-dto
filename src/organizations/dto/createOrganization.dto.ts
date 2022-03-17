import { IsNotEmpty, IsNotEmptyObject, IsString } from 'class-validator'
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
}
