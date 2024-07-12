import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString } from 'class-validator'

export class AddProductDocumentDto {
@IsNotEmpty()
@ApiProperty()
@IsString()
productId: string

@IsNotEmpty()
@ApiProperty()
@IsString()
uploadKey: string
}
