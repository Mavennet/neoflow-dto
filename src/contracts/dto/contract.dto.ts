import {
  IsNotEmpty,
  IsNumber,
  IsEnum,
  IsBoolean,
  IsOptional,
  IsDateString,
  IsString,
  Matches
} from 'class-validator'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { CONTRACT_STATUS } from '../'

export class ContractDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  id: number

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  sender: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  receiver: string

  @ApiProperty()
  @IsNotEmpty()
  @Matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/)
  startDate: string

  @ApiProperty()
  @IsNotEmpty()
  @Matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/)
  endDate: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  destination: string

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  isAccepted: boolean

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(CONTRACT_STATUS)
  status: CONTRACT_STATUS

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  createdAt: Date

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  updatedAt: Date

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  comment?: string
}
