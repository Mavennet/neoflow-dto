import { CredentialDTO } from '@mavennet/traceability-dto'
import { ApiProperty } from '@nestjs/swagger'
import { ArrayMinSize, IsNotEmpty, IsString, Validate, ValidateNested } from 'class-validator'

class IntentToImport {
  @ApiProperty()
  @IsString({ each: true })
  @ArrayMinSize(1)
  @Validate((o) => o.type.includes('IntentToImport'))
  type: string[]

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  importIntent: string
}

export class IntentToImportVC extends CredentialDTO {
  @ApiProperty()
  @IsString({ each: true })
  @Validate((o) => o.type.includes('IntentToImportCredential'))
  @Validate((o) => o.includes('VerifiableCredential'))
  declare type: string[]

  @ApiProperty()
  @ValidateNested()
  declare credentialSubject: IntentToImport
}
