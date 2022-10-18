import { ApiProperty } from '@nestjs/swagger'
import { IsNumber, IsArray, ArrayMinSize } from 'class-validator'

export class DeleteTransferRequestsDTO {
  @ApiProperty({ isArray: true, type: () => Number })
  @IsArray()
  @IsNumber({}, { each: true })
  @ArrayMinSize(1)
  transferRequestIds: number[]
}
