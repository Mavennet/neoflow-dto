import { IsArray } from 'class-validator'

export class DocumentDTO {
  @IsArray()
  type: string[]
}
