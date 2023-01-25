import {
  IsNotEmpty,
  IsOptional,
  IsDateString,
  IsNumber,
  IsString,
  IsEmail
} from 'class-validator'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export class SubContractDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  contractId: number

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  nosPeriod: Date

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  cost: number

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  takeOrPayCommitmentBPD: number

  @ApiPropertyOptional()
  @IsOptional()
  @IsEmail()
  shipperEmail?: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  pipeline: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  deliveryFacility?: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  subContractKey: string
}
