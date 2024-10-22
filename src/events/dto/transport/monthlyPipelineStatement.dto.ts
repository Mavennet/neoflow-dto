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
import { CredentialDTO } from '@mavennet/traceability-dto'

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

export class MonthlyPipelineStatementVC extends CredentialDTO<MonthlyPipelineStatementCredentialSubject> {
  @ApiPropertyOptional()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => MonthlyPipelineStatementCredentialSubject)
  credentialSubject: MonthlyPipelineStatementCredentialSubject
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
  @Type(() => MonthlyPipelineStatementVC)
  eventVC: MonthlyPipelineStatementVC
}
