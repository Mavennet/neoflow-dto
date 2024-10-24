import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, ValidateNested, IsUUID } from 'class-validator'
import { Type } from 'class-transformer'
import { TSCACertificationCredentialSubjectDTO } from './event.credentialSubject.dto'
import { EnvelopedVerifiableCredential } from '@mavennet/traceability-dto'

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
  @Type(() => EnvelopedVerifiableCredential)
  eventVC: EnvelopedVerifiableCredential
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
