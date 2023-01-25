import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString
} from 'class-validator'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export abstract class CreateSubContractDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  pipeline: string

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  takeOrPayCommitmentBPD: number

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  cost: number

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  nosPeriod: Date

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  deliveryFacility?: string
}
