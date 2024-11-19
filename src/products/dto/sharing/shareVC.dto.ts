import { IsNotEmpty, IsUUID, IsArray, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { ApiProperty } from '@nestjs/swagger'
import { VCAccessibilityDTO } from './vcAccessibility.dto'

export class ShareVCDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  productId: string

  @ApiProperty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => VCAccessibilityDTO)
  accessibilities: VCAccessibilityDTO[]
}
