import { ApiProperty } from '@nestjs/swagger'
import { ArrayMinSize, IsNotEmpty } from 'class-validator'

export class RetrieveBatchProductsDTO {
  @IsNotEmpty()
  @ArrayMinSize(1)
  @ApiProperty()
  batchNumbers: string[]
}
