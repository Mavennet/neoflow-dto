import { IsNotEmpty, IsUUID, IsString, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { InspectionEventCredentialSubjectDTO } from './inspectionEventCredentialSubject.dto'
import { InspectionEventDetailsDTO } from './inspectionEvent.vc.dto'

export class InspectProductDTO {
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

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => InspectionEventCredentialSubjectDTO)
  inspectCredentialSubject: InspectionEventCredentialSubjectDTO
}
