import { IsNotEmpty, IsUUID, IsNumber, IsArray } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class VCAccessibilityDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  orgId: number

  @ApiProperty()
  @IsArray()
  @IsUUID('4', { each: true })
  sharedVCIds: string[]
}
