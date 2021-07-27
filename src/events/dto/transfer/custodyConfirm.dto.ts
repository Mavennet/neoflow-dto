import {
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsString,
  IsBoolean,
  ValidateIf
} from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class TransferCustodyConfirmationDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  transferCustodyRequestId: number

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  confirmationStatus: boolean

  @ApiProperty()
  @IsOptional()
  @IsString()
  comment?: string

  @ApiProperty()
  @ValidateIf(o => o.confirmationStatus === false)
  @IsNotEmpty()
  @IsBoolean()
  hasDocuments: boolean
}
