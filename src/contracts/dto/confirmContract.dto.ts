import { IsNotEmpty, IsNumber, IsString, IsBoolean, IsOptional, Matches } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class ConfirmContractDTO {
  @IsNotEmpty()
  @ApiProperty()
  @IsNumber()
  contractId: number

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  @Matches(/^did:/)
  receiver: string

  @IsNotEmpty()
  @ApiProperty()
  @IsBoolean()
  status: boolean

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  destination: string

  @ApiProperty()
  @IsOptional()
  @IsString()
  comment: string
}
