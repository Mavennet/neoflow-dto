import { Equals, IsNotEmpty } from 'class-validator'

export class JsonLdContext {
  @IsNotEmpty()
  @Equals('https://mavennet.com/contexts/#')
  '@context': string
}
