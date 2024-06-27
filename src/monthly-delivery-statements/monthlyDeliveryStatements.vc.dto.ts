import {
  IsOptional,
  IsNotEmpty,
  IsArray,
  IsDateString,
  ArrayMinSize,
  ArrayMaxSize,
  ValidateNested,
  ValidateIf,
  IsUrl
} from 'class-validator'
import { Type } from 'class-transformer'
import { ProofDTO } from '../general/dto/proof.dto'
import { MonthlyDeliveryStatementsCredentialSubjectDTO } from './monthlyDeliveryStatements.credentialSubject.dto'

export class MonthlyDeliveryStatementsVCDTO {
  @IsArray()
  @ArrayMinSize(1)
  '@context': string[]

  @IsNotEmpty()
  @IsUrl({ require_tld: false })
  id: string

  @IsArray()
  @ArrayMinSize(2)
  @ArrayMaxSize(2)
  @ValidateIf((o) => o.type.includes('VerifiableCredential') && o.type.includes('MonthlyMonthlyDeliveryStatementsCredential'))
  type: string[]

  @IsOptional()
  @IsDateString()
  issuanceDate?: string | Date

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => MonthlyDeliveryStatementsCredentialSubjectDTO)
  credentialSubject: MonthlyDeliveryStatementsCredentialSubjectDTO

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ProofDTO)
  proof: ProofDTO
}
