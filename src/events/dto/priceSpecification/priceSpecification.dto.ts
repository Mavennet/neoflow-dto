import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, ValidateNested, IsUUID } from 'class-validator'
import { Type } from 'class-transformer'
import { PriceSpecificationCredentialSubjectDTO } from './event.credentialSubject.dto'
import { PriceSpecificationDetailsDTO } from './event.vc.dto'

export class CORE_PriceSpecificationDTO {
  @ApiProperty()
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
  @Type(() => PriceSpecificationDetailsDTO)
  eventVC: PriceSpecificationDetailsDTO
}

export class AGENT_PriceSpecificationDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  gasShipmentId: string

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => PriceSpecificationCredentialSubjectDTO)
  credentialSubject: PriceSpecificationCredentialSubjectDTO
}
