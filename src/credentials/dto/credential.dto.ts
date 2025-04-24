import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import {
  ArrayMinSize,
  IsArray,
  IsDateString,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
  IsUrl,
  Validate,
  ValidateIf,
  ValidateNested
} from 'class-validator'
import { IssuerDTO } from '../../general/dto/issuer.dto'
import { Type } from 'class-transformer'
import { type CredentialStatusDTO } from './credentialStatus.dto'
import { CredentialSchema } from './credentialSchema.dto'

export abstract class CredentialDTO<T> {
  @ApiProperty()
  @IsArray()
  @ArrayMinSize(1)
  @IsUrl({}, { each: true })
  @Validate((o) => o['@context'].includes('https://www.w3.org/ns/credentials/v2'))
  '@context': string[]

  @ApiProperty()
  @IsString()
  @ValidateIf((object, value) => value !== undefined)
  id: string

  @ApiProperty()
  @IsString({ each: true })
  @ArrayMinSize(1)
  type: string[]

  @ApiProperty()
  @IsNotEmpty()
  @Type(() => IssuerDTO)
  issuer: IssuerDTO

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  validFrom: string | Date

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  validUntil?: string | Date

  @ApiProperty()
  @IsNotEmpty()
  @IsObject()
  @ValidateNested()
  abstract credentialSubject: T

  @ApiPropertyOptional()
  @IsOptional()
  @IsArray()
  credentialStatus?: CredentialStatusDTO[]

  @ApiPropertyOptional()
  @IsOptional()
  @Type(() => CredentialSchema)
  credentialSchema?: CredentialSchema
}
