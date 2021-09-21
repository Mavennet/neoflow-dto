import { ApiProperty } from '@nestjs/swagger'
import { IsArray, ArrayMinSize } from 'class-validator'

export class DeleteTransferRequestsDTO {
  @ApiProperty()
  @IsArray()
  @ArrayMinSize(1)
  transferRequestIds: number[]
}
