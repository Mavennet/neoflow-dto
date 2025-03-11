import { DeliveryTicketCredentialSubjectDTO } from './event.credentialSubject.dto'
import { EnvelopedVerifiableCredential } from '../../../credentials'
export declare class CORE_DeliveryTicketDTO {
  productId: string
  gasShipmentId: string
  uploadFileKey?: string
  eventId: string
  eventVC: EnvelopedVerifiableCredential
}
export declare class AGENT_DeliveryTicketDTO {
  productId: string
  gasShipmentId: string
  uploadFileKey?: string
  credentialSubject: DeliveryTicketCredentialSubjectDTO
}

export declare enum STATUS {
  SUCCESS = 'SUCCESS',
  DUPLICATE = 'DUPLICATE'
}

export declare class CORE_DeliveryTicketResponseDto {
  status: STATUS
  eventVC?: EnvelopedVerifiableCredential
}
