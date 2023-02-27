import {
  IsNotEmpty,
  IsUUID,
  IsArray,
  ArrayMinSize,
  IsString
} from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class ShareProductDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  productId: string

  @ApiProperty()
  @IsArray()
  @ArrayMinSize(1)
  @IsString({ each: true })
  orgs: string[]
}
