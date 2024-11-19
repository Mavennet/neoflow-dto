import {
  IsNotEmpty,
  IsPositive,
  IsNumber,
  IsEmail,
  IsBoolean,
  IsOptional,
  ValidateIf,
  ValidateNested,
  IsString,
  Matches
} from 'class-validator'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { CreateSubContractDTO } from './createSubContract.dto'

export class CreateContractDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Matches(/^did:/)
  sender: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Matches(/^did:/)
  receiver: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  destination: string

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
  @IsBoolean()
  isMonthly: boolean

  @ApiPropertyOptional()
  @IsOptional()
  @IsEmail()
  signedInEmail?: string

  @ApiProperty()
  @ValidateIf((o) => o.isMonthly === true)
  @ValidateNested({ each: true })
  @IsNotEmpty()
  @Type(() => CreateSubContractDTO)
  createSubContracts?: CreateSubContractDTO[]

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @IsPositive()
  takeOrPayVolume?: number

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @IsPositive()
  tariff?: number
}
