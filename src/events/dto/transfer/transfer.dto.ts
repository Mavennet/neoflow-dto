import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsUUID,
  ValidateNested
} from 'class-validator'
import { Type } from 'class-transformer'
import { TransferEventVCDTO } from './event.vc.dto'
import { AGENT_TransferEventCredentialSubjectDTO } from './event.credentialSubject.dto'
import { ApiProperty } from '@nestjs/swagger'

export class AGENT_TransferDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  requestId: number

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  productId: string

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  eventId: string

  @ApiProperty()
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
  @IsString()
  txTimestamp: string

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => TransferEventVCDTO)
  eventVC: TransferEventVCDTO
}
