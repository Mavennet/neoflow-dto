import {
  IsEnum,
  IsArray,
  ArrayNotEmpty,
  Validate
} from 'class-validator'
import {
	ProductCredentialSubjectDTO as ProductCredentialSubjectDTOBase	
} from 'mavennet-dto'
import { JSON_TYPE } from '../../general'

export class ProductCredentialSubjectDTO extends ProductCredentialSubjectDTOBase {	
  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(JSON_TYPE, { each: true })
  @Validate(o => o.type === [JSON_TYPE.METAL_PRODUCT])
  type: JSON_TYPE[]
}
