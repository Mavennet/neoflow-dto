import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsUUID,
  IsNotEmptyObject,
  ValidateNested
} from 'class-validator'
import { Type } from 'class-transformer'
import { AddressDTO } from '../../../general'
import { TransferEventVCDTO } from './event.vc.dto'
import {
  AGENT_TransferEventCredentialSubjectDTO
} from './event.credentialSubject.dto'

export class AGENT_TransferDTO {
  @IsNotEmpty()
  @IsNumber()
  requestId: number

  @IsNotEmpty()
  @IsUUID()
  productId: string

  @IsNotEmpty()
  @IsUUID()
  eventId: string

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => AGENT_TransferEventCredentialSubjectDTO)
  eventCredentialSubject: AGENT_TransferEventCredentialSubjectDTO
}

export class CORE_TransferDTO {
  @IsNotEmpty()
  @IsNumber()
  requestId: number

  @IsNotEmpty()
  @IsUUID()
  productId: string

  @IsNotEmpty()
  @IsUUID()
  eventId: string

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
  @Type(() => TransferEventVCDTO)
  eventVC: TransferEventVCDTO
}
