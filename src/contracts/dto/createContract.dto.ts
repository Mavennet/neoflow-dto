import {
  IsNotEmpty,
  IsPositive,
  IsNumber,
  IsEmail,
  IsBoolean,
  IsOptional,
  ValidateIf,
  ValidateNested
} from 'class-validator'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { CreateSubContractDTO } from './createSubContract.dto'
import { CreateContractDTO as CreateContractDTOBase } from '@mavennet/traceability-dto'

export class CreateContractDTO extends CreateContractDTOBase {
  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  isMonthly: boolean

  @ApiPropertyOptional()
  @IsOptional()
  @IsEmail()
  signedInEmail?: string

  @ApiProperty()
  @ValidateIf(o => o.isMonthly === true)
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
