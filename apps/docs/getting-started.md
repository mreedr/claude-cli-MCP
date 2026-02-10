# Getting Started

Install the SDK in your project:

```bash
npm install @repo/sdk
# or
pnpm add @repo/sdk
```

## Usage

Import and use the SDK in your code:

```ts
import { greet, SDK_VERSION } from "@repo/sdk";

console.log(greet("World")); // "Hello, World!"
console.log(SDK_VERSION); // "0.0.1"
```

When you edit `packages/sdk/src/index.ts` in this repo, the docs dev server will hot-reload so you can see your changes immediately.
