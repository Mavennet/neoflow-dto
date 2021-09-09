import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsArray,
  IsUUID,
  IsEnum,
  IsString,
  ValidateNested,
  Validate
} from 'class-validator'
import { Type } from 'class-transformer'
import { AGENT_StorageEventCredentialSubjectDTO } from './event.credentialSubject.dto'
import { StorageEventVCDTO } from './event.vc.dto'
import { COMPACT_OrganizationDTO, COMPACT_MeasurementDTO, COMPACT_ObservationDTO , COMPACT_PlaceDTO} from '../../../general'
import { ProductBrief } from '../../../products'
import { EVENT_TYPE, STORAGE_TYPE } from '../../constants'
import { ApiProperty } from '@nestjs/swagger'

export class AGENT_COMPACT_StoreProductDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(STORAGE_TYPE)
  @Validate(o => o.eventType === STORAGE_TYPE.STORAGE_START)
  eventType: STORAGE_TYPE

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
  @Type(() => ProductBrief)
  product: ProductBrief

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

export class AGENT_StorageProductDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(EVENT_TYPE)
  eventType: EVENT_TYPE

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  eventId: string

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => AGENT_StorageEventCredentialSubjectDTO)
  credentialSubject: AGENT_StorageEventCredentialSubjectDTO
}

export class CORE_StorageProductDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  productId: string

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  eventId: string

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => StorageEventVCDTO)
  eventVC: StorageEventVCDTO

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  eventVCHash: string
}
