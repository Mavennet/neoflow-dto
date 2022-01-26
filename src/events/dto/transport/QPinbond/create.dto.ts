import { IsString, IsNotEmpty, IsNotEmptyObject, IsUrl, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { QPInbondCredentialSubjectDTO } from './credentialSubject.dto'
import { QPInBondEventVCDTO } from './event.vc.dto'

export class CreateQPInbondDTO {
  @IsNotEmpty()
  @IsUrl()
  productId: string

  @IsNotEmpty()
  @IsUrl()
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

  @IsNotEmpty()
  @IsString()
  txHash: string

  @IsNotEmpty()
  @IsString() // TODO fix data type
  txTimestamp: string
}
