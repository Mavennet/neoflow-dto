import { IsNotEmpty, IsUUID, IsString, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { AGENT_InspectionEventCredentialSubjectDTO } from './event.credentialSubject.dto'
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

  @IsNotEmpty()
  @IsString()
  eventVCHash: string

  @IsNotEmpty()
  @IsString()
  txHash: string

  @IsNotEmpty()
  @IsString() // TODO fix data type
  txTimestamp: string
}

export class AGENT_InspectProductDTO extends CORE_InspectProductDTO {
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => AGENT_InspectionEventCredentialSubjectDTO)
  inspectCredentialSubject: AGENT_InspectionEventCredentialSubjectDTO
}
