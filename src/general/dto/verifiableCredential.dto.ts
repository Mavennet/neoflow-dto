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

export abstract class VerifiableCredentialDTO extends VerifiableCredentialDTOBase {
}

