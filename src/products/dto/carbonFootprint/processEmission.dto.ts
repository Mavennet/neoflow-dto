import {
  IsNotEmpty,
  IsArray,
  ArrayMinSize,
  IsNumberString
} from 'class-validator'
import { MeasurementDTO } from 'mavennet-dto'

interface ProcessMaterialsDetails {
  processMaterial: string
  amount: MeasurementDTO
}

export class ProcessEmissionDTO {
  @IsNotEmpty()
  @IsNumberString()
  co2EmissionsInTonnes: number

  @IsNotEmpty()
  @IsArray()
  @ArrayMinSize(1)
  processMaterialsDetails: ProcessMaterialsDetails[]
}
