import { Type } from 'class-transformer'
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsDateString,
  IsNotEmpty,
  IsOptional,
  ValidateIf,
  ValidateNested
} from 'class-validator'
import { ProofDTO } from '../general/dto/proof.dto'
import { MonthlyDeliveryStatementsCredentialSubjectDTO } from './monthlyDeliveryStatements.credentialSubject.dto'

export class MonthlyDeliveryStatementsVCDTO {
  @IsArray()
  @ArrayMinSize(1)
  '@context': string[]

  @IsNotEmpty()
  id: string

  @IsArray()
  @ArrayMinSize(2)
  @ArrayMaxSize(2)
  @ValidateIf(
    (o) => o.type.includes('VerifiableCredential') && o.type.includes('MonthlyMonthlyDeliveryStatementsCredential')
  )
  type: string[]

  @IsOptional()
  @IsDateString()
  validFrom?: string | Date

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => MonthlyDeliveryStatementsCredentialSubjectDTO)
  credentialSubject: MonthlyDeliveryStatementsCredentialSubjectDTO

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ProofDTO)
  proof: ProofDTO
}
