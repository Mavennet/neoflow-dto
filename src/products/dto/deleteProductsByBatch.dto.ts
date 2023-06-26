import { ApiProperty } from '@nestjs/swagger'
import { IsDateString, IsNotEmpty, IsString } from 'class-validator'

export class DeleteProductsByBatchDTO {
  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  pipeline: string

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  batch: string

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  commodity: string

  @IsNotEmpty()
  @ApiProperty()
  @IsDateString()
  nominationMonth: string
}
