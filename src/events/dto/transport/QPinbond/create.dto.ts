import { IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { QPInBondEventVCDTO } from './event.vc.dto'
import { QPInbondCredentialSubjectDTO } from '.'

export class CreateQPInbondDTO {
  @IsNotEmpty()
  productId: string

  @IsNotEmpty()
  eventId: string

  @IsOptional()
  @ValidateNested()
  @Type(() => QPInBondEventVCDTO)
  eventVC: QPInBondEventVCDTO

  @IsOptional()
  @ValidateNested()
  @Type(() => QPInbondCredentialSubjectDTO)
  credentialSubject: QPInbondCredentialSubjectDTO
}
