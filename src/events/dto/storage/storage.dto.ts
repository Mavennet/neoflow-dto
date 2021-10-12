import { ApiProperty } from '@nestjs/swagger'
import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsArray,
  IsUUID,
  IsString,
  ValidateNested,
  IsEnum,
  Validate
} from 'class-validator'
import { Type } from 'class-transformer'
import { COMPACT_OrganizationDTO, COMPACT_MeasurementDTO, COMPACT_ObservationDTO, COMPACT_PlaceDTO } from '../../../general'
import { STORAGE_EVENT_TYPE } from '../../constants'
import { AGENT_StorageEventCredentialSubjectDTO } from './event.credentialSubject.dto'
import { CORE_StorageEventDetailsDTO, AGENT_StorageEventDetailsDTO } from './event.vc.dto'

export class AGENT_COMPACT_StoreProductDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(STORAGE_EVENT_TYPE)
  @Validate(o => o.eventType === STORAGE_EVENT_TYPE.START)
  eventType: STORAGE_EVENT_TYPE

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => COMPACT_OrganizationDTO)
  initiator: COMPACT_OrganizationDTO

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => COMPACT_PlaceDTO)
  place: COMPACT_PlaceDTO

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => COMPACT_MeasurementDTO)
  storedWeight: COMPACT_MeasurementDTO

  @ApiProperty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => COMPACT_ObservationDTO)
  observation: COMPACT_ObservationDTO[]
}

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
