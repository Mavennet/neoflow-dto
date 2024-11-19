import { IsArray, ArrayMinSize } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export abstract class DeleteContractsDTO {
  @ApiProperty()
  @IsArray()
  @ArrayMinSize(1)
  contractIds: number[]
}
