import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNotEmpty, IsString } from 'class-validator'
import { USMCA_STATUS } from '../constants'

export class UpsertProductUSMCADTO {
  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  productId: string

  @IsNotEmpty()
  @ApiProperty()
  @IsEnum(USMCA_STATUS)
  usmca: USMCA_STATUS
}
