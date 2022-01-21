import { IsNotEmptyObject } from 'class-validator'
import { CreateOrganizationDTO as CreateOrganizationDTOBase } from '@mavennet/traceability-dto'

export class CreateOrganizationDTO extends CreateOrganizationDTOBase{

  @IsNotEmptyObject()
  uwi: Map<string, string>
}
