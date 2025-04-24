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
  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  index?: number

  @ValidateNested()
  @Type(() => ContactFormDTO)
  @ApiProperty({ required: false })
  @IsOptional()
  certifierDetails?: ContactFormDTO

  @ValidateNested()
  @Type(() => ContactFormDTO)
  @ApiProperty({ required: false })
  @IsOptional()
  exporterDetails?: ContactFormDTO

  @IsOptional()
  @ValidateNested()
  @Type(() => ContactFormDTO)
  @ApiProperty({ required: false })
  producerDetails?: ContactFormDTO

  @ValidateNested()
  @Type(() => ContactFormDTO)
  @ApiProperty({ required: false })
  @IsOptional()
  importerDetails?: ContactFormDTO

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => GoodsDTO)
  @ApiProperty({ isArray: true, type: GoodsDTO, required: false })
  @IsOptional()
  goods?: GoodsDTO[]

  @IsOptional()
  @ApiProperty({ required: false })
  @IsBoolean()
  variousProducers?: boolean

  @ApiProperty({ required: false })
  @IsDateString()
  @IsOptional()
  validFrom?: string | Date

  @ApiProperty({ required: false })
  @IsDateString()
  @IsOptional()
  validUntil?: string | Date

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  certificationId?: string
}

export class CORE_GENERATED_USMCADTO extends CORE_USMCADTO {
  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => EnvelopedVerifiableCredential)
  certificationVC: EnvelopedVerifiableCredential
}
