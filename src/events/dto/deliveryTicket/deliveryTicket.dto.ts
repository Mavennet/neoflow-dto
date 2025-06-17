import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, ValidateNested, IsUUID, ValidateIf, IsOptional } from 'class-validator'
import { Type } from 'class-transformer'
import { DeliveryTicketCredentialSubjectDTO } from './event.credentialSubject.dto'
import { EnvelopedVerifiableCredential } from '../../../credentials'
import { WrappedEnvelopedVCDTO } from '../../../general'

export class CORE_DeliveryTicketDTO {
  @ApiProperty()
  @ValidateIf((o) => !o.gasShipmentId || o.productId)
  @IsNotEmpty()
  @IsUUID()
  productId: string

  @ApiProperty()
  @ValidateIf((o) => !o.productId || o.gasShipmentId)
  @IsNotEmpty()
  @IsUUID()
  gasShipmentId?: string

  @ApiProperty()
  @IsOptional()
  uploadFileKey?: string

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => WrappedEnvelopedVCDTO)
  eventVC: WrappedEnvelopedVCDTO
}

export class AGENT_DeliveryTicketDTO {
  @ApiProperty()
  @ValidateIf((o) => !o.gasShipmentId || o.productId)
  @IsNotEmpty()
  @IsUUID()
  productId: string

  @ApiProperty()
  @ValidateIf((o) => !o.productId || o.gasShipmentId)
  @IsNotEmpty()
  @IsUUID()
  gasShipmentId: string

  @ApiProperty()
  @IsOptional()
  uploadFileKey?: string

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => DeliveryTicketCredentialSubjectDTO)
  credentialSubject: DeliveryTicketCredentialSubjectDTO
}

export enum DELIVERY_TICKET_STATUS {
  SUCCESS = 'SUCCESS',
  DUPLICATE = 'DUPLICATE'
}

export class CORE_DeliveryTicketResponseDto {
  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  deliveryTicketStatus: DELIVERY_TICKET_STATUS

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  @Type(() => EnvelopedVerifiableCredential)
  eventVC?: EnvelopedVerifiableCredential
}
