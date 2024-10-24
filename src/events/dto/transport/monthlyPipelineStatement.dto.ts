import { CredentialDTO } from '@mavennet/traceability-dto'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsNotEmpty, IsNotEmptyObject, IsString, ValidateNested } from 'class-validator'
import { MonthlyDeliveryStatementDTO, OrganizationDTO } from '../../../general'

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
