import {
  IsNotEmpty,
  IsString,
  ValidateNested,
  IsUUID
} from 'class-validator'
import { Type } from 'class-transformer'
import {
  ProductVCDTO,
  ProductCredentialSubjectDTO
} from '../../../products'
import { EventCreateVCDTO } from './event.vc.dto'
import {
  AGENT_EventCreateCredentialSubjectDTO
} from './event.credentialSubject.dto'
import { ApiProperty } from '@nestjs/swagger'

export class AGENT_CreateProductDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  status: string

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  productId: string

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ProductCredentialSubjectDTO)
  productCredentialSubject: ProductCredentialSubjectDTO

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => AGENT_EventCreateCredentialSubjectDTO)
  eventCredentialSubject: AGENT_EventCreateCredentialSubjectDTO
}

export class CORE_CreateProductDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  productId: string

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ProductVCDTO)
  productVC: ProductVCDTO

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  productVCHash: string

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  eventId: string

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => EventCreateVCDTO)
  eventVC: EventCreateVCDTO

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
