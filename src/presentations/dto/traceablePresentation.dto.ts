import {
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Validate,
  ValidateNested
} from 'class-validator'
import { Type } from 'class-transformer'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { ProofDTO } from '../../general'
import { EnvelopedVerifiableCredential } from '../../credentials'
import { WorkflowDTO } from './workflow.dto'

export class TraceablePresentationDTO {
  @ApiProperty()
  @IsArray()
  @ArrayMinSize(1)
  @IsUrl({}, { each: true })
  @Validate((o) => o['@context'].includes('https://www.w3.org/ns/credentials/v2'))
  @Validate((o) => o['@context'].includes('https://w3id.org/traceability/v1'))
  '@context': string[]

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  id: string

  @ApiProperty()
  @IsString({ each: true })
  @ArrayMinSize(1)
  @Validate((o) => o.includes('VerifiablePresentation'))
  @Validate((o) => o.includes('TraceablePresentation'))
  type: string[]

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  holder?: string

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => EnvelopedVerifiableCredential)
  verifiableCredential: EnvelopedVerifiableCredential[]

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => WorkflowDTO)
  workflow: WorkflowDTO

  @ApiPropertyOptional()
  @IsOptional()
  @ValidateNested()
  @Type(() => ProofDTO)
  proof?: ProofDTO
}
