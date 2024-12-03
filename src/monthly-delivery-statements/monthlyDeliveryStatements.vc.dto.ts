import { Type } from 'class-transformer'
import { IsNotEmpty, ValidateNested } from 'class-validator'
import { CredentialDTO } from '../credentials'
import { MonthlyDeliveryStatementsCredentialSubjectDTO } from './monthlyDeliveryStatements.credentialSubject.dto'

export class MonthlyDeliveryStatementsVCDTO extends CredentialDTO<MonthlyDeliveryStatementsCredentialSubjectDTO> {
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => MonthlyDeliveryStatementsCredentialSubjectDTO)
  credentialSubject: MonthlyDeliveryStatementsCredentialSubjectDTO
}
