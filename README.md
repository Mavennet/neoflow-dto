# Neoflow-DTO

![Mavennet](https://mavennet-website.s3.amazonaws.com/assets/logo-dark.png)

### Build Status
[![CI/CD](https://github.com/Mavennet/neoflow-dto/actions/workflows/release.yaml/badge.svg)](https://github.com/Mavennet/neoflow-dto/actions/workflows/release.yaml)

## Table of Contents

- [Build](#build-%EF%B8%8F)
- [Installation](#installation-%EF%B8%8F)
- [Usage](#usage-%EF%B8%8F)
- [Troubleshooting](#troubleshooting-)
- [More About the Repository](#more-about-the-repository-)
    - [Branches](#branches)
    - [Navigation](#navigation)
    - [Notes](#notes)

## Build 🛠️

### To build library 

```bash
npm update && npm run build
```

## Installation ⬇️

### To install library

```bash
npm i Mavennet/neoflow-dto --save
```

### To install a branch of library

```bash
npm i Mavennet/neoflow-dto#branch-name
```

## Usage ⚙️

### Prerequisites

- Node.js 16+
- Npm 6+

### Repos that should use this library

- [Neoflow Org. Agent Back End](https://github.com/Mavennet/neoflow-org-agent-be)
- [Neoflow Core Back End](https://github.com/Mavennet/neoflow-core-be)
- [Neoflow Front End](https://github.com/Mavennet/neoflow-fe)

### Importing

After using [npm to install](#installation-%EF%B8%8F) the package, import the DTO at the top of the file that is to use it. 

```ts
import { RandomDTO } from '@mavennet/neoflow-dto'
```

### Naming Convention 

When creating or importing Org. Agent or Core specific DTOs, this is the naming convention that is followed:

All [Org. Agent](https://github.com/Mavennet/neoflow-org-agent-be) specific DTOs have a prefix: `AGENT_`

All [Core Service](https://github.com/Mavennet/neoflow-core-be) specific DTOs have a prefix: `CORE_`

## Troubleshooting 🔍

Some common issues faced are: 

### 1. Did not build

There are two parts to the package: src and lib. 

<details><summary>src</summary>

Is what is being editing. When making changes, creating new DTOs, adding constants, etc., all this must be done here. 
</details>

<details><summary>lib</summary>
Is where the DTOs are being exported from when when any file imports them. Editing the files here is pointless as when the package is built, it gets over written.
</details>

The problem arises when changes are made to src but package is not built. Although the src contains updates files, the files are going to be imported form lib, which still has the outdates version. Make sure to build the package before pushing the changes to any branch:

```bash
npm run build
```

### 2. Did not export

Each folder and sub-folder contains a file called index.ts. This is the file where DTOs and folders are being exported from. Without a file being exported, it will not be accesible in another program and will likley result in the "does not exist" error in the import statement. To solve this, add an export statement into the index file contained within the folder where the DTO file is located. 

```ts
export * from './random.dto'
```

### 3. Cannot make an instance of an abstract class. 

Some DTOs are abstract classes, and probably for good reason. But if there is ever the need to create an instance of one, just create another class which extends the abstract one and export that. 

Reference:
The [abstract class](https://github.com/Mavennet/traceability-dto/blob/master/src/documents/dto/saveS3DocumentsFolderPath.dto.ts) and the resolved [implementation](https://github.com/Mavennet/neoflow-dto/blob/master/src/documents/dto/saveS3DocumentsFolderPath.dto.ts)

## More About the Repository 🤔

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
