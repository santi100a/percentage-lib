# Santi's Powerful Percentage Function

[![Build Status][workflow badge]][repo actions]
[![npm homepage][npm badge]][npm home]
[![GitHub stars][stars badge]][repo url]
[![License][license badge]][repo url]
[![Bundlephobia stats][bundlephobia badge]][bundlephobia url]

[workflow badge]: https://github.com/santi100a/percentage-lib/actions/workflows/ci.yml/badge.svg
[npm badge]: https://img.shields.io/npm/v/@santi100a/percentage-lib
[stars badge]: https://img.shields.io/github/stars/santi100a/percentage-lib.svg
[license badge]: https://img.shields.io/github/license/santi100a/percentage-lib.svg
[bundlephobia badge]: https://img.shields.io/bundlephobia/min/@santi100a/percentage-lib
[npm home]: https://npmjs.org/package/@santi100a/percentage-lib
[repo actions]: https://github.com/santi100a/percentage-lib/actions
[repo url]: https://github.com/santi100a/percentage-lib
[bundlephobia url]: https://bundlephobia.com/package/@santi100a/percentage-lib@latest

- 🚀 Lightweight and fast
- 👴 ES3-compliant
- 💻 Portable between the browser and Node.js
- 📘 Includes TypeScript definitions

## What's this?

This is a lightweight, portable NPM package to take the percentage of any number.

$$ P = \frac{1}{100} \cdot n \cdot p $$

## Installation

- Via NPM: `npm install @santi100a/percentage-lib`
- Via Yarn: `yarn add @santi100a/percentage-lib`
- Via PNPM: `pnpm install @santi100a/percentage-lib`

## API

- `function percentage(num: number, percentage: number): number;`

  Calculates the percentage of a given number.

  | Name         | Type     | Description                                                 | Optional? | Default |
  | ------------ | -------- | ----------------------------------------------------------- | --------- | ------- |
  | `num`        | `number` | The number for which the percentage needs to be calculated. | No        | _N/A_   |
  | `percentage` | `number` | The percentage value to calculate. Must be positive.        | No        | _N/A_   |

  Returns the calculated percentage value.
  Throws a `TypeError` If `num` is not a number or `percentage` is not a number.
  Throws a `TypeError` If `percentage` is not positive.

## Usage

```typescript
const percentage = require('@santi100a/percentage-lib'); // CJS
import percentage from '@santi100a/percentage-lib'; // ESM
import percentage = require('@santi100a/percentage-lib'); // TypeScript

const result = percentage(50, 20);
console.log(result); // Output: 10
```

## Contribute

Wanna contribute? [File an issue](https://github.com/santi100a/percentage-lib/issues) or [pull request](https://github.com/santi100a/percentage-lib/pulls)!
Look at [the contribution instructions](CONTRIBUTING.md) and make sure you follow the [contribution Code of Conduct](CODE_OF_CONDUCT.md).
