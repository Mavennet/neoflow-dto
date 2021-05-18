// import { IsNotEmpty, IsString, ValidateNested, IsUUID } from 'class-validator'
// import { Type } from 'class-transformer'
// // import { ProductVCDTO } from './product.vc.dto'
// // import { CreationEventVCDTO } from '../../events/dto/creationEvent.vc.dto'

// // import { CreationEventCredentialSubjectDTO } from '../../events/dto/creationEventCredentialSubject.dto'

// import { ProductCredentialSubjectDTO } from './productCredentialSubject.dto'
// import { CreationEventCredentialSubjectDTO } from '../../events'

// export class AGENT_CreateProductDTO {
//   @IsNotEmpty()
//   @IsUUID()
//   productId: string

//   @IsNotEmpty()
//   @ValidateNested()
//   @Type(() => ProductCredentialSubjectDTO)
//   productCredentialSubject: ProductCredentialSubjectDTO

//   @IsNotEmpty()
//   @ValidateNested()
//   @Type(() => CreationEventCredentialSubjectDTO)
//   eventCredentialSubject: CreationEventCredentialSubjectDTO
// }

// export class CORE_CreateProductDTO {
//   @IsNotEmpty()
//   @IsUUID()
//   productId: string

//   @IsNotEmpty()
//   @ValidateNested()
//   @Type(() => ProductVCDTO)
//   productVC: ProductVCDTO

//   @IsNotEmpty()
//   @IsString()
//   productVCHash: string

//   @IsNotEmpty()
//   @IsUUID()
//   eventId: string

//   @IsNotEmpty()
//   @ValidateNested()
//   @Type(() => CreationEventVCDTO)
//   eventVC: CreationEventVCDTO

//   @IsNotEmpty()
//   @IsString()
//   eventVCHash: string

//   @IsNotEmpty()
//   @IsString()
//   txHash: string

//   @IsNotEmpty()
//   @IsString() // TODO fix data type
//   txTimestamp: string
// }
