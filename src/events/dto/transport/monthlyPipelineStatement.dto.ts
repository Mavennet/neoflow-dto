import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsOptional,
  IsString,
  Matches,
  ValidateNested,
  IsArray,
  ArrayMinSize,
  ArrayContains,
  IsDateString
} from 'class-validator'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { OrganizationDTO, MonthlyDeliveryStatementDTO } from '../../../general'
import { Type } from 'class-transformer'
import { JSON_TYPE } from '../../../general/constants'
import { ProofDTO } from '../../../general/dto'

export class MonthlyPipelineStatementCredentialSubject {
  @ApiPropertyOptional()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => OrganizationDTO)
  carrier: OrganizationDTO

  @ApiPropertyOptional()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => OrganizationDTO)
  shipper: OrganizationDTO

  @ApiPropertyOptional()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => OrganizationDTO)
  consignee: OrganizationDTO

  @ApiPropertyOptional()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => MonthlyDeliveryStatementDTO)
  monthlyDeliveryStatement: MonthlyDeliveryStatementDTO
}

export class AGENT_MonthlyPipelineStatementDTO {
  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  productId: string

  @ApiPropertyOptional()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => MonthlyPipelineStatementCredentialSubject)
  credentialSubject: MonthlyPipelineStatementCredentialSubject
}

export class MonthlyPipelineStatement_VC {
  @ApiProperty()
  @IsArray()
  @ArrayMinSize(1)
  '@context': string[]

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  id: string

  @ApiProperty()
  @IsArray()
  @ArrayMinSize(1)
  @ArrayContains([JSON_TYPE.VERIFIABLE_CREDENTIAL])
  type: JSON_TYPE[]

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Matches(/^did:/)
  issuer: string

  @ApiPropertyOptional()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => MonthlyPipelineStatementCredentialSubject)
  credentialSubject: MonthlyPipelineStatementCredentialSubject

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  validFrom?: string | Date

  @ApiPropertyOptional()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => ProofDTO)
  proof: ProofDTO
}

export class CORE_MonthlyPipelineStatementDTO {
  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  productId: string

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  eventId: string

  @ApiPropertyOptional()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => MonthlyPipelineStatement_VC)
  eventVC: MonthlyPipelineStatement_VC
}
