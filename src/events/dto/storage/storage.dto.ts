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
import { Organization, Measurement, Observation , Place} from '../../../general'
import { ProductBrief } from '../../../products'
import { EVENT_TYPE, STORAGE_TYPE } from '../../constants'
import { ApiProperty } from '@nestjs/swagger'

export class StoreProduct {
  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(STORAGE_TYPE)
  @Validate(o => o.eventType === STORAGE_TYPE.STORAGE_START)
  eventType: STORAGE_TYPE

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => Organization)
  initiator: Organization

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => Place)
  place: Place

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => ProductBrief)
  product: ProductBrief

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => Measurement)
  storedWeight: Measurement

  @ApiProperty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Observation)
  observation: Observation[]
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

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  txHash: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  txTimestamp: string
}
