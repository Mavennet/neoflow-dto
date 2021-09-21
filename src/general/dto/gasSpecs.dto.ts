import { IsOptional, IsString } from 'class-validator'

export class GasSpecsDTO {
  @IsOptional()
  @IsString()
  pressure: string

  @IsOptional()
  @IsString()
  temperature: string

  @IsOptional()
  @IsString()
  waterContent: string

  @IsOptional()
  @IsString()
  oxygenContent: string

  @IsOptional()
  @IsString()
  nitrogenContent: string

  @IsOptional()
  @IsString()
  mercaptanContent: string

  @IsOptional()
  @IsString()
  grossHeatingValue: string

  @IsOptional()
  @IsString()
  totalInertsContent: string

  @IsOptional()
  @IsString()
  totalSulfurContent: string

  @IsOptional()
  @IsString()
  hydrocarbonDewPoint: string

  @IsOptional()
  @IsString()
  carbonDioxideContent: string

  @IsOptional()
  @IsString()
  hydrogenSulfideContent: string

  @IsOptional()
  @IsString()
  sandDustGumsAndFreeLiquid: string
}
