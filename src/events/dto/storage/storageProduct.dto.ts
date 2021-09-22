import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsUUID, IsString, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'

import { StorageEventCredentialSubjectDTO } from './storageEventCredentialSubject.dto'
import { StorageEventDetailsDTO } from './storageEvent.vc.dto'

export class StorageProductDTO {
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
  @Type(() => StorageEventDetailsDTO)
  eventVC: StorageEventDetailsDTO

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

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  productHash: string

  @IsNotEmpty()
  @ApiProperty()
  @ValidateNested()
  @Type(() => StorageEventCredentialSubjectDTO)
  storageCredentialSubject: StorageEventCredentialSubjectDTO
}
