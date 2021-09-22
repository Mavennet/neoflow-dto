import { IsNotEmpty, IsEnum, IsUUID, IsString, ValidateNested, ValidateIf } from 'class-validator'
import { Type } from 'class-transformer'
import {
  TransportationEventCredentialSubjectDTO,
  OGBillOfLadingCredentialSubjectDTO,
  TransportationEventDetailsDTO,
  OGBillOfLadingVCDTO
} from './'
import { TRANSPORT_EVENT_TYPE } from '../../constants'

export class TransportProductDTO {
  @IsNotEmpty()
  @IsUUID()
  productId: string

  @IsNotEmpty()
  @IsUUID()
  eventId: string

  @IsNotEmpty()
  @IsEnum(TRANSPORT_EVENT_TYPE)
  eventType: TRANSPORT_EVENT_TYPE

  @IsNotEmpty()
  @ValidateNested()
  @ValidateIf((o) => o.eventType === TRANSPORT_EVENT_TYPE.START)
  @Type(() => TransportationEventDetailsDTO)
  transportVC: TransportationEventDetailsDTO

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

  @IsNotEmpty()
  @ValidateNested()
  @ValidateIf((o) => o.eventType === TRANSPORT_EVENT_TYPE.START)
  @Type(() => TransportationEventCredentialSubjectDTO)
  transportCredentialSubject: TransportationEventCredentialSubjectDTO

  @IsNotEmpty()
  @ValidateNested()
  @ValidateIf((o) => o.eventType === TRANSPORT_EVENT_TYPE.END)
  @Type(() => OGBillOfLadingCredentialSubjectDTO)
  billOfLadingCredentialSubject: OGBillOfLadingCredentialSubjectDTO
}
