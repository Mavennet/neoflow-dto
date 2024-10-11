import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import {
  ArrayMinSize,
  IsArray,
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  ValidateNested
} from 'class-validator'
import { ProofDTO } from '../../../general/dto/proof.dto'
import {
  AGENT_StorageEventCredentialSubjectDTO,
  CORE_StorageEventCredentialSubjectDTO
} from './event.credentialSubject.dto'

class StorageEventDetailsDTOBase {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  id: string

  @IsArray()
  @ArrayMinSize(1)
  '@context': string[]

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Matches(/^did:/)
  issuer: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  validFrom?: string | Date

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ProofDTO)
  proof: ProofDTO
}

export class AGENT_StorageEventDetailsDTO extends StorageEventDetailsDTOBase {
  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => AGENT_StorageEventCredentialSubjectDTO)
  credentialSubject: AGENT_StorageEventCredentialSubjectDTO
}

export class CORE_StorageEventDetailsDTO extends StorageEventDetailsDTOBase {
  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => CORE_StorageEventCredentialSubjectDTO)
  credentialSubject: CORE_StorageEventCredentialSubjectDTO
}
