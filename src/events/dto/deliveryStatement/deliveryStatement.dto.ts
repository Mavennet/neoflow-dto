import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, ValidateNested, IsUUID, ValidateIf, IsOptional } from 'class-validator'
import { Type } from 'class-transformer'
import { DeliveryStatementCredentialSubjectDTO } from './event.credentialSubject.dto'
import { DeliveryStatementVCDTO } from './event.vc.dto'

export class CORE_DeliveryStatementDTO {
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
  @IsUUID()
  eventId: string

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => DeliveryStatementVCDTO)
  eventVC: DeliveryStatementVCDTO
}

export class AGENT_DeliveryStatementDTO {
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
  @Type(() => DeliveryStatementCredentialSubjectDTO)
  credentialSubject: DeliveryStatementCredentialSubjectDTO
}