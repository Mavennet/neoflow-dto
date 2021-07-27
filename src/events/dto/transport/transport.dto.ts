import {
  IsNotEmpty,
  IsEnum,
  IsString,
  ValidateNested,
  ValidateIf,
  IsUUID
} from 'class-validator'
import { Type } from 'class-transformer'
import {
  TransportEventVCDTO,
  BillOfLadingVCDTO
} from './event.vc.dto'
import {
  AGENT_TransportEventCredentialSubjectDTO,
  AGENT_BillOfLadingCredentialSubjectDTO
} from './event.credentialSubject.dto'
import { EVENT_TYPE } from '../../constants'
import { ApiProperty } from '@nestjs/swagger'

export class AGENT_TransportProductDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(EVENT_TYPE)
  eventType: EVENT_TYPE

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
  @ValidateIf(o => o.eventType === EVENT_TYPE.TRANSPORT_START)
  @Type(() => AGENT_TransportEventCredentialSubjectDTO)
  transportCredentialSubject?: AGENT_TransportEventCredentialSubjectDTO

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @ValidateIf(o => o.eventType === EVENT_TYPE.TRANSPORT_END)
  @Type(() => AGENT_BillOfLadingCredentialSubjectDTO)
  billOfLadingCredentialSubject?: AGENT_BillOfLadingCredentialSubjectDTO
}

export class CORE_TransportProductDTO {
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
  @IsEnum(EVENT_TYPE)
  eventType: EVENT_TYPE

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @ValidateIf(o => o.eventType === EVENT_TYPE.TRANSPORT_START)
  @Type(() => TransportEventVCDTO)
  transportVC?: TransportEventVCDTO

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @ValidateIf(o => o.eventType === EVENT_TYPE.TRANSPORT_END)
  @Type(() => BillOfLadingVCDTO)
  bolVC?: BillOfLadingVCDTO

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
