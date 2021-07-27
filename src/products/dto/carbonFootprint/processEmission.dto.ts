import {
  IsNotEmpty,
  IsArray,
  ArrayMinSize,
  IsNumber,
  ValidateNested
} from 'class-validator'
import { MeasurementDTO } from 'mavennet-dto'
import { ApiProperty } from '@nestjs/swagger'

interface ProcessMaterialsDetails {
  processMaterial: string
  amount: MeasurementDTO
}

export class ProcessEmissionDTO {
  // @ApiProperty()
  // @IsNotEmpty()
  // @IsNumber()
  // co2EmissionsInTonnes: number

  @ApiProperty()
  @IsNotEmpty()
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  processMaterialsDetails: ProcessMaterialsDetails[]
}
