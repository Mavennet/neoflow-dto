import { IsNotEmpty, IsUUID, IsArray, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { ApiProperty } from '@nestjs/swagger'
import { VCAccessibilityDTO } from '../../products/dto/sharing/vcAccessibility.dto'

export class ShareGasShipmentVCDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  gasShipmentId: string

  @ApiProperty({ isArray: true, type: () => VCAccessibilityDTO })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => VCAccessibilityDTO)
  accessibilities: VCAccessibilityDTO[]
}
