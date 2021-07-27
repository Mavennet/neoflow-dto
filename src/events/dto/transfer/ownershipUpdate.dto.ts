import {
  IsBoolean,
  IsNotEmpty,
  IsString,
  IsNumberString,
  IsOptional,
  Matches
} from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class TransferOwnershipUpdateDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  requestId: string

  @ApiProperty()
  @IsOptional()
  @IsNumberString()
  contractId?: string

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
