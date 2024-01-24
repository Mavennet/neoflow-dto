import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, ValidateNested, IsUUID } from 'class-validator'
import { Type } from 'class-transformer'
import { TSCACertificationCredentialSubjectDTO } from './event.credentialSubject.dto'
import { TSCACertificationDetailsDTO } from './event.vc.dto'

export class CORE_TSCACertificationDTO {
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
  @Type(() => TSCACertificationDetailsDTO)
  eventVC: TSCACertificationDetailsDTO
}

export class AGENT_TSCACertificationDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  gasShipmentId: string

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => TSCACertificationCredentialSubjectDTO)
  credentialSubject: TSCACertificationCredentialSubjectDTO
}
