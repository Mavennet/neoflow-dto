import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsString,
  IsUUID,
  IsBoolean,
  IsEnum,
  IsDateString,
  ValidateNested
} from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { ORIGIN_CRITERION } from '../../../products/constants'
import { Type } from 'class-transformer'
import { CertifierDTO } from './certifier.dto'

export class CertifyProductDTO {
  @IsNotEmpty()
  @ApiProperty()
  @IsUUID()
  productId: string

  @IsNotEmptyObject()
  @ApiProperty()
  @ValidateNested()
  @Type(() => CertifierDTO)
  certifier: CertifierDTO

  @IsNotEmptyObject()
  @ApiProperty()
  @ValidateNested()
  @Type(() => CertifierDTO)
  exporter: CertifierDTO

  @IsNotEmptyObject()
  @ApiProperty()
  @ValidateNested()
  @Type(() => CertifierDTO)
  producer: CertifierDTO

  @IsNotEmptyObject()
  @ApiProperty()
  @ValidateNested()
  @Type(() => CertifierDTO)
  importer: CertifierDTO

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  htsCode: string

  @IsNotEmpty()
  @ApiProperty()
  @IsEnum(ORIGIN_CRITERION)
  originCriterion: ORIGIN_CRITERION

  @IsNotEmpty()
  @ApiProperty()
  @IsBoolean()
  blanketPeriod: boolean

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  authName: string

  @IsNotEmpty()
  @ApiProperty()
  @IsDateString()
  authDate: Date
}
