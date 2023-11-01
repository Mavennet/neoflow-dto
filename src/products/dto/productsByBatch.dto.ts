import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString } from 'class-validator'

export class ProductsByBatchDTO {
  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  batchNumber: string

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  nosMonth: string

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  productId: string
}
