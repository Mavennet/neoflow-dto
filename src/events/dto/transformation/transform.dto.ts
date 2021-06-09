import {
  IsNotEmpty,
  IsArray,
  ArrayMinSize,
  IsString,
  ValidateNested,
  IsUUID
} from 'class-validator'
import { Type } from 'class-transformer'
import { 
  ProductVCDTO,
  ProductCredentialSubjectDTO
} from '../../../products'
import { TransformEventVCDTO } from './event.vc.dto'
import {	
  AGENT_TransformEventCredentialSubjectDTO 
} from './event.credentialSubject.dto'

export class AGENT_TransformOutputProductDTO{
  @IsNotEmpty()
  @IsUUID()
  productId: string

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ProductCredentialSubjectDTO)
  productCredentialSubject: ProductCredentialSubjectDTO
}

export class AGENT_TransformProductDTO {
  @IsNotEmpty()
  @IsArray()
  @ArrayMinSize(1)
  inputProductIds: string[]

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => AGENT_TransformOutputProductDTO)
  outputProducts: AGENT_TransformOutputProductDTO[]

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => AGENT_TransformEventCredentialSubjectDTO)
  eventCredentialSubject: AGENT_TransformEventCredentialSubjectDTO
}

export class CORE_TransformOutputProductDTO {
  @IsNotEmpty()
  @IsUUID()
  productId: string

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ProductVCDTO)
  productVC: ProductVCDTO

  @IsNotEmpty()
  @IsString()
  productVCHash: string
}

export class CORE_TransformProductDTO {
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => CORE_TransformOutputProductDTO)
  outputProducts: CORE_TransformOutputProductDTO[]

  @IsNotEmpty()
  @IsUUID()
  eventId: string

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => TransformEventVCDTO)
  eventVC: TransformEventVCDTO

  @IsNotEmpty()
  @IsString()
  eventVCHash: string

  @IsNotEmpty()
  @IsString()
  txHash: string

  @IsNotEmpty()
  @IsString()
  txTimestamp: string
}
