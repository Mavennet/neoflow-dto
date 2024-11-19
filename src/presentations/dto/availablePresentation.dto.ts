class CredentialQuery {
  type: [string]
  reason: string
}

class QueryResponse {
  type: string
  credentialQuery: CredentialQuery[]
}

export class AvailablePresentationDTO {
  query: QueryResponse[]
}
