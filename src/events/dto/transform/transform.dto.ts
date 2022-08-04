import { IsNotEmpty, IsUUID, IsString, IsArray, ArrayMinSize, ValidateNested, IsOptional } from 'class-validator'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { TransformProductSuccessorDTO } from './transformProductSuccessor.dto'
import { AGENT_TransformationEventCredentialSubjectDTO } from './event.credentialSubject.dto'
import { AGENT_COMPACT_CreateProductDTO } from '../createProduct'
import { CORE_TransformationEventDetailsDTO } from './event.vc.dto'
import { ProductCredentialSubjectDTO } from '../../../products'
import { ProductHashDTO } from '../../../general'

export class AGENT_COMPACT_TransformProductDTO {
  @ApiProperty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AGENT_COMPACT_CreateProductDTO)
  newProducts: AGENT_COMPACT_CreateProductDTO[]

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  sku?: string
}

export class CORE_TransformProductsDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  eventId: string

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => CORE_TransformationEventDetailsDTO)
  eventVC: CORE_TransformationEventDetailsDTO

  @ApiProperty()
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => TransformProductSuccessorDTO)
  successors: TransformProductSuccessorDTO[]
}

export class AGENT_TransformProductsDTO {
  @ApiProperty()
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => ProductHashDTO)
  consumedProducts: ProductHashDTO[]

  @ApiProperty()
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => ProductCredentialSubjectDTO)
  newProducts: ProductCredentialSubjectDTO[]

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => AGENT_TransformationEventCredentialSubjectDTO)
  eventCredentialSubject: AGENT_TransformationEventCredentialSubjectDTO
}
