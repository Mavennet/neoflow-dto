import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsString,
  IsArray,
  ValidateNested,
  IsUUID
} from 'class-validator'
import { Type } from 'class-transformer'
import { MillTestVCDTO } from './event.vc.dto'
import { AGENT_MillTestCredentialSubjectDTO } from './event.credentialSubject.dto'
import { ApiProperty } from '@nestjs/swagger'
import { Organization, Observation } from '../../../general'

export class MillTest {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  productId: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  certifier: string

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => Organization)
  manufacturer: Organization

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  specification: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  originalCountryOfMeltAndPour: string

  @ApiProperty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Observation)
  observation: Observation[]
}

export class AGENT_MillTestDTO {
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
  @Type(() => AGENT_MillTestCredentialSubjectDTO)
  millTestCredentialSubject: AGENT_MillTestCredentialSubjectDTO
}

export class CORE_MillTestDTO {
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
  @Type(() => MillTestVCDTO)
  millTestVC: MillTestVCDTO

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
