import { IsNotEmpty, IsString, ValidateNested, IsUUID } from 'class-validator'
import { Type } from 'class-transformer'
import { ProductVCDTO } from './product.vc.dto'
import { ProductCredentialSubjectDTO } from './product.credentialSubject.dto'
import { 
	EventCreateVCDTO,
	AGENT_EventCreateCredentialSubjectDTO
} from '../../events'

// https://w3c-ccg.github.io/traceability-vocab/#SteelProduct

export class AGENT_CreateProductDTO {
  @IsNotEmpty()
  @IsUUID()
  productId: string

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ProductCredentialSubjectDTO)
  productCredentialSubject: ProductCredentialSubjectDTO

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => AGENT_EventCreateCredentialSubjectDTO)
  eventCredentialSubject: AGENT_EventCreateCredentialSubjectDTO
}

export class CORE_CreateProductDTO {
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

  @IsNotEmpty()
  @IsUUID()
  eventId: string

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => EventCreateVCDTO)
  eventVC: EventCreateVCDTO

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