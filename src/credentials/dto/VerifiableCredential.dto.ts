import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsNotEmpty, IsObject, IsOptional, ValidateNested } from 'class-validator'
import { ProofDTO } from '../../general/dto'
import { CredentialDTO } from './credential.dto'

export class VerifiableCredentialDTO<T> extends CredentialDTO<T> {
  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  @Type(() => ProofDTO)
  @IsObject()
  proof?: ProofDTO

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  credentialSubject: T
}
