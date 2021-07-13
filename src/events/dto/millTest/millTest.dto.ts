import {
  IsNotEmpty,
  IsString,
  ValidateNested,
  IsUUID
} from 'class-validator'
import { Type } from 'class-transformer'
import { MillTestVCDTO } from './event.vc.dto'
import { AGENT_MillTestCredentialSubjectDTO } from './event.credentialSubject.dto'

export class AGENT_MillTestDTO {
  @IsNotEmpty()
  @IsUUID()
  productId: string

  @IsNotEmpty()
  @IsUUID()
  eventId: string

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => AGENT_MillTestCredentialSubjectDTO)
  millTestCredentialSubject: AGENT_MillTestCredentialSubjectDTO
}

export class CORE_MillTestDTO {
  @IsNotEmpty()
  @IsUUID()
  productId: string

  @IsNotEmpty()
  @IsUUID()
  eventId: string

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => MillTestVCDTO)
  millTestVC: MillTestVCDTO

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
