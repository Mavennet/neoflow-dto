import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNotEmpty, IsString } from 'class-validator'
import { CLAIM_STATUS } from '../constants'

export class UpsertProductUSMCADTO {
  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  productId: string

  @IsNotEmpty()
  @ApiProperty()
  @IsEnum(CLAIM_STATUS)
  usmca: CLAIM_STATUS
}
