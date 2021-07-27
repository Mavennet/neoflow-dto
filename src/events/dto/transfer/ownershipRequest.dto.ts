import {
  IsBoolean,
  IsNotEmpty,
  IsString,
  IsNumber,
  IsNumberString,
  IsOptional,
  Matches
} from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class TransferOwnershipRequestDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  productId: string

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  contractId?: number

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Matches(/^did:/)
  receiver: string

  @ApiProperty()
  @IsNotEmpty()
  @IsNumberString()
  price: string

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  hasDocuments: boolean
}
