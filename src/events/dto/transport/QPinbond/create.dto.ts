import { IsString, IsNotEmpty, IsNotEmptyObject, IsUrl, ValidateNested, ValidateIf } from 'class-validator'
import { Type } from 'class-transformer'
import { QPInbondCredentialSubjectDTO } from './credentialSubject.dto'
import { QPInBondEventVCDTO } from './event.vc.dto'

export class CreateQPInbondDTO {
  @IsNotEmpty()
  @IsUrl()
  @ValidateIf((o) => o.productId.startsWith('http://neo-flow.com/credentials/'))
  productId: string

  @IsNotEmpty()
  @IsUrl()
  @ValidateIf((o) => o.eventId.startsWith('http://neo-flow.com/credentials/'))
  eventId: string

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => QPInbondCredentialSubjectDTO)
  credentialSubject: QPInbondCredentialSubjectDTO

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => QPInBondEventVCDTO)
  eventVC: QPInBondEventVCDTO

  @IsNotEmpty()
  @IsString()
  eventVCHash: string
}
