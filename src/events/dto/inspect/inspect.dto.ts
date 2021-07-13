import {
  IsNotEmpty,
  IsString,
  ValidateNested,
  IsUUID
} from 'class-validator'
import { Type } from 'class-transformer'
import { InspectVCDTO } from './event.vc.dto'
import {
  AGENT_InspectCredentialSubjectDTO
} from './event.credentialSubject.dto'

export class AGENT_InspectDTO {
  @IsNotEmpty()
  @IsUUID()
  productId: string

  @IsNotEmpty()
  @IsUUID()
  eventId: string

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => AGENT_InspectCredentialSubjectDTO)
  inspectCredentailSubject: AGENT_InspectCredentialSubjectDTO
}

export class CORE_InspectDTO {
  @IsNotEmpty()
  @IsUUID()
  productId: string

  @IsNotEmpty()
  @IsUUID()
  eventId: string

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => InspectVCDTO)
  eventVC: InspectVCDTO

  @IsNotEmpty()
  @IsString()
  eventVCHash: string

  @IsNotEmpty()
  @IsString()
  txHash: string

  @IsNotEmpty()
  @IsString()
  txTimestamp: string
}
