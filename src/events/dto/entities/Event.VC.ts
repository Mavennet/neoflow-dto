import { IsNotEmpty } from 'class-validator'
import { EVENT_TYPE } from './Event.entity'

export class EventVC {
  identifier: string

  @IsNotEmpty()
  eventName: EVENT_TYPE

  @IsNotEmpty()
  timestamp?: string

  latitude: string
  longitude: string
  address: string

  volume?: number
  price?: number

  transportType?: string
  batchNo?: string
  scn?: string
  bol?: string

  deliveryTicketId?: string

  txHash?: string

  eventSubmitter: string

  recipient?: string
  // productParents?: string[];
  // productSuccessors?: string[];
}
