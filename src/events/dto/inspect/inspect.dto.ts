import { IsNotEmpty, ValidateNested, IsUUID } from 'class-validator'
import { Type } from 'class-transformer'
import { InspectionEventCredentialSubjectDTO } from './event.credentialSubject.dto'
import { InspectionEventDetailsDTO } from './event.vc.dto'

export class CORE_InspectProductDTO {
  @IsNotEmpty()
  @IsUUID()
  productId: string

  @IsNotEmpty()
  @IsUUID()
  eventId: string

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => InspectionEventDetailsDTO)
  eventVC: InspectionEventDetailsDTO
}

export class AGENT_InspectProductDTO {
  @IsNotEmpty()
  @IsUUID()
  productId: string

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => InspectionEventCredentialSubjectDTO)
  inspectCredentialSubject: InspectionEventCredentialSubjectDTO
}
