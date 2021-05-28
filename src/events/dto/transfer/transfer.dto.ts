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

export class AGENT_TransferOwnershipDTO {
  @IsNotEmpty()
  @IsNumber()
  requestId: number

  @IsNotEmpty()
  @IsUUID()
  eventId: string

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => AddressDTO)
  geo: AddressDTO
}

export class CORE_TransferOwnershipDTO {
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
