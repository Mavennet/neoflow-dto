import { IsOptional, IsNumberString, IsString } from 'class-validator'

export class ChemicalSpecsDTO {
  @IsOptional()
  @IsString()
  type: string

  @IsOptional()
  @IsNumberString()
  microCarbonResidue: string

  @IsOptional()
  @IsNumberString()
  aromaticsTotalBTEX: string

  @IsOptional()
  @IsNumberString()
  sedimentAndWater: string

  @IsOptional()
  @IsNumberString()
  liquidPhaseH2S: string

  @IsOptional()
  @IsNumberString()
  mercury: string // Hg

  @IsOptional()
  @IsNumberString()
  oxygenates: string

  @IsOptional()
  @IsNumberString()
  filterableSolids: string

  @IsOptional()
  @IsNumberString()
  phosphorousVolatile: string

  @IsOptional()
  @IsNumberString()
  mediumChainTriglycerides: string

  @IsOptional()
  @IsNumberString()
  benzene: string

  @IsOptional()
  @IsNumberString()
  particulates: string

  @IsOptional()
  @IsNumberString()
  organicChlorides: string

  @IsOptional()
  @IsNumberString()
  nickel: string // Ni

  @IsOptional()
  @IsNumberString()
  vanadium: string // V

  @IsOptional()
  @IsNumberString()
  water: string

  @IsOptional()
  @IsNumberString()
  molecularWeight: string

  @IsOptional()
  @IsNumberString()
  sulphur: string // S

  @IsOptional()
  @IsNumberString()
  naphthenes: string

  @IsOptional()
  @IsNumberString()
  chloride: string

  @IsOptional()
  @IsNumberString()
  arsenic: string // As

  @IsOptional()
  @IsNumberString()
  lead: string // Pb

  @IsOptional()
  @IsNumberString()
  ethene: string

  @IsOptional()
  @IsNumberString()
  propane: string

  @IsOptional()
  @IsNumberString()
  isoButane: string

  @IsOptional()
  @IsNumberString()
  nButane: string

  @IsOptional()
  @IsNumberString()
  hydrocarbonsHeavier: string

  @IsOptional()
  @IsNumberString()
  unsaturatedHydrocarbons: string
}
