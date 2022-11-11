import { ApiPropertyOptional } from '@nestjs/swagger'
import { IsOptional, IsNumberString, IsString } from 'class-validator'

export class ChemicalSpecsDTO {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  type?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumberString()
  microCarbonResidue?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumberString()
  aromaticsTotalBTEX?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumberString()
  sedimentAndWater?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumberString()
  liquidPhaseH2S?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumberString()
  mercury?: string // Hg

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumberString()
  oxygenates?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumberString()
  filterableSolids?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumberString()
  phosphorousVolatile?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumberString()
  mediumChainTriglycerides?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumberString()
  benzene?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumberString()
  particulates?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumberString()
  organicChlorides?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumberString()
  nickel?: string // Ni

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumberString()
  vanadium?: string // V

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumberString()
  water?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumberString()
  molecularWeight?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumberString()
  sulphur?: string // S

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumberString()
  naphthenes?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumberString()
  chloride?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumberString()
  arsenic?: string // As

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumberString()
  lead?: string // Pb

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumberString()
  ethene?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumberString()
  propane?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumberString()
  isoButane?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumberString()
  nButane?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumberString()
  hydrocarbonsHeavier?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumberString()
  unsaturatedHydrocarbons?: string
}
