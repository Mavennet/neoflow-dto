import {
  IsNotEmpty,
  IsPositive,
  IsNumber
} from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export abstract class UpdateSubContractDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  subContractId: number

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  takeOrPayCommitmentBPD: number

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  cost: number
}
