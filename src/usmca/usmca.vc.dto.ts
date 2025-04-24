import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsNotEmpty,
  IsNotEmptyObject,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested
} from 'class-validator'
import { USMCACredentialSubjectDTO } from './usmcaCredentialSubject.dto'
import { IssuerDTO } from '../general'
import { ContactFormDTO } from './contactForm.dto'
import { GoodsDTO } from './goods.dto'
import { EnvelopedVerifiableCredential } from '../credentials'

export class AGENT_USMCADTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  validFrom: string | Date

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  validUntil: string | Date

  @IsNotEmptyObject()
  @ApiProperty()
  @ValidateNested()
  @Type(() => IssuerDTO)
  issuer: IssuerDTO

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => ContactFormDTO)
  @ApiProperty()
  certifierDetails: ContactFormDTO

  @IsNotEmptyObject()
  @ApiProperty()
  @ValidateNested()
  @Type(() => USMCACredentialSubjectDTO)
  credentialSubject: USMCACredentialSubjectDTO
}

export class CORE_USMCADTO {
  @ApiProperty()
  @IsNumber()
  @IsOptional()
  index?: number

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => ContactFormDTO)
  @ApiProperty()
  certifierDetails: ContactFormDTO

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => ContactFormDTO)
  @ApiProperty()
  exporterDetails: ContactFormDTO

  @IsOptional()
  @ValidateNested()
  @Type(() => ContactFormDTO)
  @ApiProperty()
  producerDetails?: ContactFormDTO

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => ContactFormDTO)
  @ApiProperty()
  importerDetails: ContactFormDTO

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => GoodsDTO)
  @ApiProperty({ isArray: true, type: GoodsDTO })
  goods: GoodsDTO[]

  @IsOptional()
  @ApiProperty()
  @IsBoolean()
  variousProducers?: boolean

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  validFrom: string | Date

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  validUntil: string | Date
}

export class CORE_GENERATED_USMCADTO extends CORE_USMCADTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  certificationId: string

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => EnvelopedVerifiableCredential)
  certificationVC: EnvelopedVerifiableCredential
}
