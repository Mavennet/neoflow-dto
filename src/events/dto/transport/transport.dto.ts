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

export class AGENT_TransportProductDTO {
  @IsNotEmpty()
  @IsEnum(EVENT_TYPE)
  eventType: EVENT_TYPE

  @IsNotEmpty()
  @IsUUID()
  productId: string

  @IsNotEmpty()
  @IsUUID()
  eventId: string

  @IsNotEmpty()
  @ValidateNested()
  @ValidateIf(o => o.eventType === EVENT_TYPE.TRANSPORT_START)
  @Type(() => AGENT_TransportEventCredentialSubjectDTO)
  transportCredentialSubject?: AGENT_TransportEventCredentialSubjectDTO

  @IsNotEmpty()
  @ValidateNested()
  @ValidateIf(o => o.eventType === EVENT_TYPE.TRANSPORT_END)
  @Type(() => AGENT_BillOfLadingCredentialSubjectDTO)
  billOfLadingCredentialSubject?: AGENT_BillOfLadingCredentialSubjectDTO
}

export class CORE_TransportProductDTO {
  @IsNotEmpty()
  @IsUUID()
  productId: string

  @IsNotEmpty()
  @IsUUID()
  eventId: string

  @IsNotEmpty()
  @IsEnum(EVENT_TYPE)
  eventType: EVENT_TYPE

  @IsNotEmpty()
  @ValidateNested()
  @ValidateIf(o => o.eventType === EVENT_TYPE.TRANSPORT_START)
  @Type(() => TransportEventVCDTO)
  transportVC?: TransportEventVCDTO

  @IsNotEmpty()
  @ValidateNested()
  @ValidateIf(o => o.eventType === EVENT_TYPE.TRANSPORT_END)
  @Type(() => BillOfLadingVCDTO)
  bolVC?: BillOfLadingVCDTO

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
