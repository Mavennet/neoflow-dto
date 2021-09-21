// import { IsNotEmpty, IsIn, IsOptional } from 'class-validator'

export class Proof {
  type
  created
  verificationMethod
  proofPurpose
  jws
}
