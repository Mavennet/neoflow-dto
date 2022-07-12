import { IsNotEmpty, IsUUID, IsArray, ArrayMinSize } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'

export class ShareProductDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  productId: string

  @ApiProperty()
  @IsArray()
  @ArrayMinSize(1)
  @Type(() => String)
  orgs: string[]
}
