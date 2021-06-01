import {
  IsArray,
  ArrayNotEmpty,
  IsEnum
} from 'class-validator'
import {
  JSON_TYPE,
  VerifiableCredentialDTO as VerifiableCredentialDTOBase
} from 'mavennet-dto'
import { JSON_TYPE_METAL } from '../constants'

export class VerifiableCredentialDTO extends  VerifiableCredentialDTOBase {
  @IsArray()
  @ArrayNotEmpty()
  @IsEnum({
    ...JSON_TYPE,
    ...JSON_TYPE_METAL
  }, { each: true })
  type: Array<JSON_TYPE | JSON_TYPE_METAL>
}

