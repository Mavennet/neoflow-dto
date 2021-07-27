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
import { ApiProperty } from '@nestjs/swagger'

export class AGENT_AddEntryDetailsDTO {
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
  @Type(() => AGENT_AddEntryDetailsCredentialSubjectDTO)
  addEntryDetailsCredentialSubject: AGENT_AddEntryDetailsCredentialSubjectDTO
}

export class CORE_AddEntryDetailsDTO {
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
  @Type(() => AddEntryDetailsVCDTO)
  addEntryDetailsVC: AddEntryDetailsVCDTO

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  eventVCHash: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  txHash: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  txTimestamp: string
}
