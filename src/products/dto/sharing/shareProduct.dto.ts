import { IsNotEmpty, IsUUID, IsArray, ArrayMinSize, IsNumber } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class ShareProductDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  productId: string

  @ApiProperty({ type: [Number] })
  @IsArray()
  @ArrayMinSize(1)
  @IsNumber({}, { each: true })
  orgs: number[]
}
