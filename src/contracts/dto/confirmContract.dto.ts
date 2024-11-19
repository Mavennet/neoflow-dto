import { IsNotEmpty, IsNumber, IsString, IsBoolean, IsOptional, Matches } from 'class-validator'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export abstract class ConfirmContractDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  contractId: number

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Matches(/^did:/)
  receiver: string

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  status: boolean

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  destination: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  comment?: string
}
