import { IsString, IsNotEmpty, IsNumber, IsUUID, IsNotEmptyObject, ValidateNested } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { AddressDTO } from '../../../general/dto/address.dto'
import { Type } from 'class-transformer'
import { CORE_TransferEventDetailsDTO } from './transferEvent.vc.dto'

export class CORE_TransferProductDTO {
  @IsNotEmpty()
  @ApiProperty()
  @IsNumber()
  requestId: number

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
  @Type(() => CORE_TransferEventDetailsDTO)
  eventVC: CORE_TransferEventDetailsDTO

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

export class AGENT_TransferProductDTO extends CORE_TransferProductDTO {
  @IsNotEmptyObject()
  @ApiProperty()
  @ValidateNested()
  @Type(() => AddressDTO)
  geo: AddressDTO
}