import { IsString, IsNotEmpty, IsNotEmptyObject, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { QPInBondEventVCDTO } from './event.vc.dto'
import { QPInbondCredentialSubjectDTO } from '.'

export class CreateQPInbondDTO {
  @IsNotEmpty()
  productId: string

  @IsNotEmpty()
  eventId: string

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => QPInBondEventVCDTO)
  eventVC: QPInBondEventVCDTO

  @IsNotEmpty()
  @IsString()
  eventVCHash: string

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => QPInbondCredentialSubjectDTO)
  credentialSubject: QPInbondCredentialSubjectDTO
}
