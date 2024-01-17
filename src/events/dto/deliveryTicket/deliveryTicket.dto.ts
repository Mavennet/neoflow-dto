import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, ValidateNested, IsUUID, ValidateIf } from 'class-validator'
import { Type } from 'class-transformer'
import { DeliveryTicketCredentialSubjectDTO } from './event.credentialSubject.dto'
import { DeliveryTicketVCDTO } from './event.vc.dto'

export class CORE_DeliveryTicketDTO {
  @ApiProperty()
  @ValidateIf(o => !o.gasShipmentId || o.productId)
  @IsNotEmpty()
  @IsUUID()
  productId: string

  @ApiProperty()
  @ValidateIf(o => !o.productId || o.gasShipmentId)
  @IsNotEmpty()
  @IsUUID()
  gasShipmentId: string

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  eventId: string

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => DeliveryTicketVCDTO)
  eventVC: DeliveryTicketVCDTO
}

export class AGENT_DeliveryTicketDTO {
  @ApiProperty()
  @ValidateIf(o => !o.gasShipmentId || o.productId)
  @IsNotEmpty()
  @IsUUID()
  productId: string

  @ApiProperty()
  @ValidateIf(o => !o.productId || o.gasShipmentId)
  @IsNotEmpty()
  @IsUUID()
  gasShipmentId: string

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => DeliveryTicketCredentialSubjectDTO)
  credentialSubject: DeliveryTicketCredentialSubjectDTO
}
