import { ApiPropertyOptional } from '@nestjs/swagger'
import { IsOptional, IsString } from 'class-validator'

export class GasSpecsDTO {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  pressure?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  temperature?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  waterContent?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  oxygenContent?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  nitrogenContent?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  mercaptanContent?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  grossHeatingValue?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  totalInertsContent?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  totalSulfurContent?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  hydrocarbonDewPoint?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  carbonDioxideContent?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  hydrogenSulfideContent?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  sandDustGumsAndFreeLiquid?: string
}
