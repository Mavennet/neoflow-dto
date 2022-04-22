# Neoflow-DTO

![Mavennet](https://mavennet-website.s3.amazonaws.com/assets/logo-dark.png)

## Table of Contents

- [Build](#build-)
- [Installation](#installation-)
- [Usage](#usage-)
- [Troubleshooting](#troubleshooting-)
- [More About the Repository](#more-about-the-repository-)
    - [Branches](#branches)
    - [Navigation](#navigation)
    - [Notes](#notes)

## Build :hammer_and_wrench:

### To build library 

```bash
npm update && npm run build
```

## Installation :arrow_down:

### To install library

```bash
npm i Mavennet/neoflow-dto --save
```

### To install a branch of library

```bash
npm i Mavennet/neoflow-dto#branch-name
```

## Usage :gear:

### Importing

After using npm to install the package, import the DTO at the top of the file that is to use it. 

```ts
import { RandomDTO } from '@mavennet/neoflow-dto'
```

### Naming Convention 

When creating or importing Org. Agen or Core specific DTOs, this is the naming convention that is followed:

All [Org. Agent](https://github.com/Mavennet/neoflow-org-agent-be) specific DTOs have a prefix: `AGENT_`

All [Core Service](https://github.com/Mavennet/neoflow-core-be) specific DTOs have a prefix: `CORE_`

## Troubleshooting :mag:

There are two main mistakes people make that result in an error. Either not building or not exporting the DTO. 

### Did not build

There are two parts to the package: src and lib. 

##### src:
Is what you are to be editing. When making changes, creating new DTOs, adding constants, etc., all this must be done here. 

#### lib:
Is where the DTOs are being exported from when you are importing and using them in your project. Editing the files here do not do much as when you do `npm run build`, it gets over written. 

The problem arises when you make changes to src but forget to do `npm run build`. Although the src contains updates files, the files are going to be imported form lib, which still has the outdates version. Make sure to build the package before pushing the changes to any branch. 

### Did not export

Each folder and sub-folder contains a file called index.ts. Ever wonder what it does? It's basically the file where DTOs and folders are being exported from. Without a file being exported, it will not be accesible in another program and you will likley get the "does not exist" error in your import statement. To solve this, add an export statement into the index file contained within the folder where your file is located. 

```ts
export * from './random.dto'
```

### Cannot make an instance of an abstract class. 

Some DTOs are abstract classes, and probably for good reason. But if there is ever the need to create an instance of one, just create another class which extends the abstract one and export that. 

Reference:
The [abstract class](https://github.com/Mavennet/traceability-dto/blob/master/src/documents/dto/saveS3DocumentsFolderPath.dto.ts) and the resolved [implementation](https://github.com/Mavennet/neoflow-dto/blob/master/src/documents/dto/saveS3DocumentsFolderPath.dto.ts)

## More About the Repository :thinking:

### Branches

[**master**](https://github.com/Mavennet/neoflow-dto) - branch that is published as a package version (changes to this will initiate a package version bump)

**_others_** - feature branch

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
├── general
│   ├── consts
│   └── dto
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
