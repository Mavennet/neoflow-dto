import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsNotEmpty, IsOptional, IsString, IsNumberString } from 'class-validator'

export class PhysicalSpecsDTO {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  type?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumberString()
  apiGravity?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumberString()
  viscosityAt10C?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumberString()
  viscosityAt20C?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumberString()
  viscosityAt30C?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumberString()
  viscosityAt40C?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumberString()
  viscosityAt45C?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumberString()
  pourPoint?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumberString()
  vapourPressure?: string

  @ApiProperty()
  @IsOptional()
  @IsNumberString()
  density?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumberString()
  diluent?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumberString()
  distillateAt350To650F?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumberString()
  gasOilAt650To980F?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumberString()
  residAt980F?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumberString()
  deemedButane?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumberString()
  tan?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumberString()
  ron?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumberString()
  mon?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumberString()
  boilingPoint?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumberString()
  freezingPoint?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumberString()
  criticalTemperature?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumberString()
  criticalPressure?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumberString()
  autoIgnitionTemperatureInAirAt1atm?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumberString()
  solubilityInTrichloroethylene?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumberString()
  penetrationAt25C100g5sec?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumberString()
  softeningPoint?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumberString()
  ductilityAt25C?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumberString()
  olefin?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  color?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  odor?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumberString()
  grossCalorificValueAt15C?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumberString()
  netCalorificValueAt15C?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumberString()
  airRequiredForCombustion?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumberString()
  copperCorrosionAt38CFor1Hour?: string
}
