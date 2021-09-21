import { IsNotEmpty, IsOptional, IsNumber, IsBoolean, IsString, ValidateIf } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class TransferCustodyConfirmationDTO {
  @IsNotEmpty()
  @ApiProperty()
  @IsNumber()
  transferCustodyRequestId: number

  @IsNotEmpty()
  @ApiProperty()
  @IsBoolean()
  confirmationStatus: boolean

  @IsOptional()
  @ApiProperty()
  @IsString()
  comment: string

  @IsNotEmpty()
  @ApiProperty()
  @IsBoolean()
  @ValidateIf((o) => o.confirmationStatus === false)
  hasDocuments: boolean
}
