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
import { ContactFormDTO, DraftContactFormDTO } from './contactForm.dto'
import { DraftGoodsDTO, GoodsDTO } from './goods.dto'
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

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  certificationId?: string
}

export class CORE_GENERATED_USMCADTO extends CORE_USMCADTO {
  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => EnvelopedVerifiableCredential)
  certificationVC: EnvelopedVerifiableCredential
}

export class CORE_DRAFT_USMCADTO {
  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  index?: number

  @IsOptional()
  @ValidateNested()
  @Type(() => DraftContactFormDTO)
  @ApiProperty({ required: false })
  certifierDetails?: DraftContactFormDTO

  @IsOptional()
  @ValidateNested()
  @Type(() => DraftContactFormDTO)
  @ApiProperty({ required: false })
  exporterDetails?: DraftContactFormDTO

  @IsOptional()
  @ValidateNested()
  @Type(() => DraftContactFormDTO)
  @ApiProperty({ required: false })
  producerDetails?: DraftContactFormDTO

  @IsOptional()
  @ValidateNested()
  @Type(() => DraftContactFormDTO)
  @ApiProperty({ required: false })
  importerDetails?: DraftContactFormDTO

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DraftGoodsDTO)
  @ApiProperty({ isArray: true, type: DraftGoodsDTO, required: false })
  goods?: DraftGoodsDTO[]

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
