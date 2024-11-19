import { ApiProperty } from '@nestjs/swagger'
import { IsArray, ArrayMinSize } from 'class-validator'

export abstract class DeleteUsersDTO {
  @ApiProperty()
  @IsArray()
  @ArrayMinSize(1)
  emails: string[]
}
