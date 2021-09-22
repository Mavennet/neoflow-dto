import { IsString, IsNotEmpty, IsNotEmptyObject, IsUrl, ValidateNested, ValidateIf } from 'class-validator'
import { Type } from 'class-transformer'
import { QPInbondCredentialSubjectDto } from './qpInbondCredentialSubject.dto'
import { QPInBondEventVCDTO } from './qpInBondEvent.vc.dto'

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
  @Type(() => QPInbondCredentialSubjectDto)
  credentialSubject: QPInbondCredentialSubjectDto

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => QPInBondEventVCDTO)
  eventVC: QPInBondEventVCDTO

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
