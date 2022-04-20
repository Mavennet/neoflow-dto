import { ApiProperty } from '@nestjs/swagger'
import { ArrayMinSize, IsNotEmpty, IsString } from 'class-validator'

export class ProductsByBatchDTO {
  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  batchNumber: string

  @IsNotEmpty()
  @ArrayMinSize(1)
  @ApiProperty()
  productIds: string[]
}
