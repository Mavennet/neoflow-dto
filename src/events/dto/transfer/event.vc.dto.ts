import { Type } from 'class-transformer'
import {
  ArrayMinSize,
  IsArray,
  IsDateString,
  IsEnum,
  IsLatitude,
  IsLongitude,
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  IsString,
  Matches,
  ValidateIf,
  ValidateNested
} from 'class-validator'
import { AddressDTO } from '../../../general/dto/address.dto'
import { ProofDTO } from '../../../general/dto/proof.dto'
import { EVENT_TYPE } from '../../constants/eventType'
import {
  AGENT_TransferEventCredentialSubjectDTO,
  CORE_TransferEventCredentialSubjectDTO
} from './event.credentialSubject.dto'

export class AGENT_TransferEventDetailsDTO {
  @IsNotEmpty()
  @IsEnum(EVENT_TYPE)
  eventName: EVENT_TYPE

  @IsNotEmpty()
  @IsDateString()
  timestamp: string

  @IsNotEmpty()
  @IsString()
  address: string

  @IsNotEmpty()
  @IsLatitude()
  latitude: string

  @IsNotEmpty()
  @IsLongitude()
  longitude: string

  @IsNotEmpty()
  @IsString()
  @Matches(/^did:/)
  eventSubmitter: string

  @IsNotEmpty()
  @IsNumberString()
  price: string

  @IsNotEmpty()
  @IsString()
  @Matches(/^did:/)
  sender: string

  @IsOptional()
  @IsString()
  @Matches(/^did:/)
  receiver: string

  @IsOptional()
  @ValidateNested()
  @Type(() => AddressDTO)
  portOfArrival: AddressDTO

  @IsOptional()
  @ValidateNested()
  @Type(() => AddressDTO)
  portOfDestination: AddressDTO

  @IsOptional()
  @IsString()
  countryOfDestination: string

  @IsOptional()
  @ValidateNested()
  @Type(() => AddressDTO)
  receiptLocation: AddressDTO

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => AGENT_TransferEventCredentialSubjectDTO)
  credentialSubject: AGENT_TransferEventCredentialSubjectDTO
}

export class CORE_TransferEventDetailsDTO {
  @IsNotEmpty()
  @ValidateIf((o) => o.id.startsWith('http://neo-flow.com/credentials/'))
  id: string

  @IsArray()
  @ArrayMinSize(1)
  '@context': string[]

  @IsArray()
  @ArrayMinSize(1)
  type: string[]

  @IsNotEmpty()
  @IsString()
  @Matches(/^did:/)
  issuer: string

  @IsNotEmpty()
  @IsDateString()
  issuanceDate: string | Date

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => CORE_TransferEventCredentialSubjectDTO)
  credentialSubject: CORE_TransferEventCredentialSubjectDTO

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ProofDTO)
  proof: ProofDTO
}
