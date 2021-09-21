import { IsString, IsNotEmpty, IsNumber, IsUUID, IsNotEmptyObject, ValidateNested } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { AddressDTO } from '../../general/dto/address.dto'
import { Type } from 'class-transformer'
import { TransferEventDetailsDTO } from '../../events/dto/transferEvent.vc.dto'

export class TransferDTO {
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
  @Type(() => TransferEventDetailsDTO)
  eventVC: TransferEventDetailsDTO

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

  @IsNotEmptyObject()
  @ApiProperty()
  @ValidateNested()
  @Type(() => AddressDTO)
  geo: AddressDTO
}
