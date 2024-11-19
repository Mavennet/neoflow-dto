import { IsEnum, IsNotEmpty, IsString, ValidateIf } from 'class-validator'
import { UPLOAD_TYPE } from '../constants'
import { ApiProperty } from '@nestjs/swagger'

export abstract class SaveS3DocumentsFolderPathDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(UPLOAD_TYPE)
  uploadType: UPLOAD_TYPE

  @ApiProperty()
  @ValidateIf((o) => o.uploadType === UPLOAD_TYPE.TRANSFER_REQUEST && !o.receiverS3DocumentsFolderPath)
  @IsNotEmpty()
  @IsString()
  senderS3DocumentsFolderPath: string

  @ApiProperty()
  @ValidateIf((o) => o.uploadType === UPLOAD_TYPE.TRANSFER_REQUEST && !o.senderS3DocumentsFolderPath)
  @IsNotEmpty()
  @IsString()
  receiverS3DocumentsFolderPath: string

  @ApiProperty()
  @ValidateIf((o) => o.uploadType === UPLOAD_TYPE.CONTRACT || o.uploadType === UPLOAD_TYPE.PRODUCT_EVENT)
  @IsNotEmpty()
  @IsString()
  s3DocumentsFolderPath: string
}
