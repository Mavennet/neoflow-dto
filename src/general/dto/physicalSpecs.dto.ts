import { IsNotEmpty, IsOptional, IsString, IsNumberString } from 'class-validator'

export class PhysicalSpecsDTO {
  @IsOptional()
  @IsString()
  type: string

  @IsOptional()
  @IsNumberString()
  apiGravity: string

  @IsOptional()
  @IsNumberString()
  viscosityAt10C: string

  @IsOptional()
  @IsNumberString()
  viscosityAt20C: string

  @IsOptional()
  @IsNumberString()
  viscosityAt30C: string

  @IsOptional()
  @IsNumberString()
  viscosityAt40C: string

  @IsOptional()
  @IsNumberString()
  viscosityAt45C: string

  @IsOptional()
  @IsNumberString()
  pourPoint: string

  @IsOptional()
  @IsNumberString()
  vapourPressure: string

  @IsNotEmpty()
  @IsNumberString()
  density: string

  @IsOptional()
  @IsNumberString()
  diluent: string

  @IsOptional()
  @IsNumberString()
  distillateAt350To650F: string

  @IsOptional()
  @IsNumberString()
  gasOilAt650To980F: string

  @IsOptional()
  @IsNumberString()
  residAt980F: string

  @IsOptional()
  @IsNumberString()
  deemedButane: string

  @IsOptional()
  @IsNumberString()
  tan: string

  @IsOptional()
  @IsNumberString()
  ron: string

  @IsOptional()
  @IsNumberString()
  mon: string

  @IsOptional()
  @IsNumberString()
  boilingPoint: string

  @IsOptional()
  @IsNumberString()
  freezingPoint: string

  @IsOptional()
  @IsNumberString()
  criticalTemperature: string

  @IsOptional()
  @IsNumberString()
  criticalPressure: string

  @IsOptional()
  @IsNumberString()
  autoIgnitionTemperatureInAirAt1atm: string

  @IsOptional()
  @IsNumberString()
  solubilityInTrichloroethylene: string

  @IsOptional()
  @IsNumberString()
  penetrationAt25C100g5sec: string

  @IsOptional()
  @IsNumberString()
  softeningPoint: string

  @IsOptional()
  @IsNumberString()
  ductilityAt25C: string

  @IsOptional()
  @IsNumberString()
  olefin: string

  @IsOptional()
  @IsString()
  color: string

  @IsOptional()
  @IsString()
  odor: string

  @IsOptional()
  @IsNumberString()
  grossCalorificValueAt15C: string

  @IsOptional()
  @IsNumberString()
  netCalorificValueAt15C: string

  @IsOptional()
  @IsNumberString()
  airRequiredForCombustion: string

  @IsOptional()
  @IsNumberString()
  copperCorrosionAt38CFor1Hour: string
}
