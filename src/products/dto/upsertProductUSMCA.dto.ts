import { ApiProperty } from '@nestjs/swagger'
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator'

export class UpsertProductUSMCADTO {
  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  productId: string

  @IsNotEmpty()
  @ApiProperty()
  @IsBoolean()
  usmca: boolean
}
