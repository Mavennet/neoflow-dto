import { IsNotEmpty, IsEnum, IsUrl, IsUUID, IsString, ValidateNested, ValidateIf } from 'class-validator'
import { Type } from 'class-transformer'
import {
  AGENT_TransportationEventCredentialSubjectDTO,
  OGBillOfLadingCredentialSubjectDTO,
  CORE_TransportationEventDetailsDTO,
  OGBillOfLadingVCDTO
} from './'
import { TRANSPORT_EVENT_TYPE } from '../../constants'

class TransportProductDTOBase {
  @IsNotEmpty()
  @IsUrl({ require_tld: process.env.NODE_ENV !== "development" })
  productId: string

  @IsNotEmpty()
  @IsUUID()
  eventId: string

  @IsNotEmpty()
  @IsEnum(TRANSPORT_EVENT_TYPE)
  eventType: TRANSPORT_EVENT_TYPE
}

export class CORE_TransportProductDTO extends TransportProductDTOBase {
  @IsNotEmpty()
  @ValidateNested()
  @ValidateIf((o) => o.eventType === TRANSPORT_EVENT_TYPE.START)
  @Type(() => CORE_TransportationEventDetailsDTO)
  transportVC: CORE_TransportationEventDetailsDTO

  @IsNotEmpty()
  @ValidateNested()
  @ValidateIf((o) => o.eventType === TRANSPORT_EVENT_TYPE.END)
  @Type(() => OGBillOfLadingVCDTO)
  bolVC: OGBillOfLadingVCDTO

  @IsNotEmpty()
  @IsString()
  eventVCHash: string

  @IsNotEmpty()
  @IsString()
  txHash: string

  @IsNotEmpty()
  @IsString() // TODO fix data type
  txTimestamp: string
}

export class AGENT_TransportProductDTO extends TransportProductDTOBase {
  @IsNotEmpty()
  @ValidateNested()
  @ValidateIf((o) => o.eventType === TRANSPORT_EVENT_TYPE.START)
  @Type(() => AGENT_TransportationEventCredentialSubjectDTO)
  transportCredentialSubject: AGENT_TransportationEventCredentialSubjectDTO

  @IsNotEmpty()
  @ValidateNested()
  @ValidateIf((o) => o.eventType === TRANSPORT_EVENT_TYPE.END)
  @Type(() => OGBillOfLadingCredentialSubjectDTO)
  billOfLadingCredentialSubject: OGBillOfLadingCredentialSubjectDTO
}
