import { IsString, IsNotEmpty, IsNotEmptyObject, IsUrl, ValidateNested, ValidateIf } from 'class-validator'
import { Type } from 'class-transformer'
import { QPInbondCredentialSubjectDTO } from './credentialSubject.dto'
import { QPInBondEventVCDTO } from './event.vc.dto'

export class CreateQPInbondDTOBase {
  @IsNotEmpty()
  @IsUrl()
  @ValidateIf((o) => o.productId.startsWith('http://neo-flow.com/credentials/'))
  productId: string

  @IsNotEmpty()
  @IsUrl()
  @ValidateIf((o) => o.eventId.startsWith('http://neo-flow.com/credentials/'))
  eventId: string

  @IsNotEmpty()
  @IsString()
  txHash: string

  @IsNotEmpty()
  @IsString() // TODO fix data type
  txTimestamp: string
}

export class CORE_CreateQPInbondDTO extends CreateQPInbondDTOBase{
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => QPInBondEventVCDTO)
  eventVC: QPInBondEventVCDTO

  @IsNotEmpty()
  @IsString()
  eventVCHash: string
}

export class AGENT_CreateQPInbondDTO extends CreateQPInbondDTOBase{
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => QPInbondCredentialSubjectDTO)
  credentialSubject: QPInbondCredentialSubjectDTO
}
