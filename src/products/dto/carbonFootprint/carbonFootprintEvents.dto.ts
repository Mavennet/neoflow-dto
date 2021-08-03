import {
  IsNotEmpty,
  IsNumber,
  IsArray,
  ArrayMinSize
} from 'class-validator'
import { MeasurementDTO } from 'mavennet-dto'

interface Events {
  event: string
  co2eProduced: MeasurementDTO
}

export class CarbonFootprintEventsDTO {
  @IsNotEmpty()
  @IsNumber()
  co2eEmissionsInTonnes: number

  @IsNotEmpty()
  @IsArray()
  @ArrayMinSize(1)
  events: Events[]
}
