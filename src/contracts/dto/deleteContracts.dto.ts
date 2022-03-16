import { ApiProperty } from '@nestjs/swagger'
import { IsArray, ArrayMinSize } from 'class-validator'

export class DeleteContractsDTO {
  @ApiProperty()
  @IsArray()
  @ArrayMinSize(1)
  contractIds: number[]
}
