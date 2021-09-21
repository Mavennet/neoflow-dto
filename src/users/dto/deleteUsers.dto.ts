import { ApiProperty } from '@nestjs/swagger'
import { IsArray, ArrayMinSize } from 'class-validator'

export class DeleteUsersDTO {
  @ApiProperty()
  @IsArray()
  @ArrayMinSize(1)
  emails: string[]
}
