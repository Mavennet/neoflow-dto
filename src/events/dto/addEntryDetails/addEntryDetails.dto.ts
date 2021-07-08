import {
  IsNotEmpty,
  IsString,
  ValidateNested,
  IsUUID
} from 'class-validator'
import { Type } from 'class-transformer'
import { AddEntryDetailsVCDTO } from './event.vc.dto'
import {
  AGENT_AddEntryDetailsCredentialSubjectDTO
} from './event.credentialSubject.dto'

export class AGENT_AddEntryDetailsDTO {
  @IsNotEmpty()
  @IsUUID()
  productId: string

  @IsNotEmpty()
  @IsUUID()
  eventId: string

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => AGENT_AddEntryDetailsCredentialSubjectDTO)
  addEntryDetailsCredentialSubject: AGENT_AddEntryDetailsCredentialSubjectDTO
}

export class CORE_AddEntryDetailsDTO {
  @IsNotEmpty()
  @IsUUID()
  productId: string

  @IsNotEmpty()
  @IsUUID()
  eventId: string

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => AddEntryDetailsVCDTO)
  addEntryDetailsVC: AddEntryDetailsVCDTO

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
