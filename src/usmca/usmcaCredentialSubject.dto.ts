import { Equals, IsArray, IsBoolean, IsNotEmptyObject, IsOptional, IsString, ValidateNested } from 'class-validator'
import { JSON_TYPE_NF } from '../general'
import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { ContactFormDTO } from './contactForm.dto'
import { GoodsDTO } from './goods.dto'

export class USMCACredentialSubjectDTO {
  @IsString()
  @Equals(JSON_TYPE_NF.USMCA_CLAIMS)
  @ApiProperty()
  type: JSON_TYPE_NF.USMCA_CLAIMS

  @IsBoolean()
  @ApiProperty()
  variousImporters: boolean

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

  @IsNotEmptyObject()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactFormDTO)
  @ApiProperty({ isArray: true, type: GoodsDTO })
  goods: GoodsDTO[]
}
