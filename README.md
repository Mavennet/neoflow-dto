<a  href="https://mavennet.com/">
	<img  alt="Mavennet"  src="https://mavennet-website.s3.amazonaws.com/assets/logo-dark.png"  width="300" />
</a>

### To build library

`npm update && npm run build`

### To install library

`npm i Mavennet/neoflow-dto --save`

### To install a branch of library

`npm i Mavennet/neoflow-dto#branch-name`

### Branches

**master** - branch that is published as a package version (changes to this will initiate a package version bump)

**_others_** - feature branch

### Naming Convention

All Org. Agent specific DTOs have a prefix: `AGENT_`

All Core Service specific DTOs have a prefix: `CORE_`

### Navigation

Below is a brief overview of the current code base structure.

```bash
src
├── analytics
│   ├── consts
│   └── dto
├── auth
│   ├── consts
│   └── dto
├── autoShareSettings
│   ├── consts
│   └── dto
├── contracts
│   ├── consts
│   └── dto
├── credentials
│   ├── consts
│   └── dto
├── documents
│   ├── consts
│   └── dto
├── events
│   ├── consts
│   └── dto
│       ├── certify
│       ├── createPoduct
│       ├── inspect
│       ├── storage
│       ├── transfer
│       ├── transform
│       └── transport
│           ├── billOfLading
│           └── QPinbond  
├── notifications
│   ├── consts
│   └── dto
├── organizations
│   ├── consts
│   └── dto
├── presentations
│   ├── consts
│   └── dto
├── products
│   ├── consts
│   └── dto
│       └── sharing
├── users
│   ├── consts
│   └── dto
├── index.ts
└── json-Id.context.ts
```

### Notes

- Many DTOs are being imported from [Traceability](https://github.com/Mavennet/traceability-dto) because they are either:
    - Duplicates --> Example: [DeleteContractsDTO](https://github.com/Mavennet/neoflow-dto/blob/master/src/contracts/dto/deleteContracts.dto.ts)
    - Duplicates with some modifications --> Example: [AnalyticsDTO](https://github.com/Mavennet/neoflow-dto/blob/master/src/analytics/dto/analytics.dto.ts)