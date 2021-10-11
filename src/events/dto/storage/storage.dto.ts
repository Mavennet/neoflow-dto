import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsUUID, IsString, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'

import { AGENT_StorageEventCredentialSubjectDTO } from './event.credentialSubject.dto'
import { CORE_StorageEventDetailsDTO, AGENT_StorageEventDetailsDTO } from './event.vc.dto'

export class CORE_StorageProductDTO {
  @IsNotEmpty()
  @ApiProperty()
  @IsUUID()
  productId: string

  @IsNotEmpty()
  @ApiProperty()
  @IsUUID()
  eventId: string

  @IsNotEmpty()
  @ApiProperty()
  @ValidateNested()
  @Type(() => CORE_StorageEventDetailsDTO)
  eventVC: CORE_StorageEventDetailsDTO

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  eventVCHash: string

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  txHash: string

  @IsNotEmpty()
  @ApiProperty()
  @IsString() // TODO fix data type
  txTimestamp: string
}

export class AGENT_StorageProductDTO extends CORE_StorageProductDTO {
  @IsNotEmpty()
  @ApiProperty()
  @ValidateNested()
  @Type(() => AGENT_StorageEventDetailsDTO)
  eventVC: AGENT_StorageEventDetailsDTO

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  productHash: string

  @IsNotEmpty()
  @ApiProperty()
  @ValidateNested()
  @Type(() => AGENT_StorageEventCredentialSubjectDTO)
  storageCredentialSubject: AGENT_StorageEventCredentialSubjectDTO
}
