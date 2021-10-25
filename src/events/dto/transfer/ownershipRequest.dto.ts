import { IsBoolean, IsNotEmpty, IsString, IsNumber, IsNumberString, IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class TransferOwnershipRequestDTO {
  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  productId: string

  @IsOptional()
  @ApiProperty()
  @IsNumber()
  contractId: number

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  receiver: string

  @IsNotEmpty()
  @ApiProperty()
  @IsNumberString()
  price: string

  @IsNotEmpty()
  @ApiProperty()
  @IsBoolean()
  hasDocuments: boolean
}
