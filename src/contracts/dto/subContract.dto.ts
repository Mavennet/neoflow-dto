import {
  IsNotEmpty,
  IsPositive,
  IsOptional,
  IsDateString,
  IsNumber,
  IsString
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
  @IsPositive()
  cost: number

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  takeOrPayCommitmentBPD: number

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
