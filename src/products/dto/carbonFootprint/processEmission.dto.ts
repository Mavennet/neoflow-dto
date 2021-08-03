import {
  IsNotEmpty,
  IsArray,
  ArrayMinSize,
  IsNumber
} from 'class-validator'
import { MeasurementDTO } from 'mavennet-dto'

interface ProcessMaterialsDetails {
  processMaterial: string
  amount: MeasurementDTO
}

export class ProcessEmissionDTO {
  @IsNotEmpty()
  @IsNumber()
  co2EmissionsInTonnes: number

  @IsNotEmpty()
  @IsNumber()
  co2eEmissionsInTonnes: number

  @IsNotEmpty()
  @IsArray()
  @ArrayMinSize(1)
  processMaterialsDetails: ProcessMaterialsDetails[]
}
