# Ember Static Heroicons

Provides all variants of [heroicons](https://github.com/tailwindlabs/heroicons) as tree-shakeable and statically-importable Glimmer components.

## Compatibility

- Ember.js v4.8 or above
- Embroider or ember-auto-import v2
- ember-template-imports – this addon is only tested with statically imported components

## Installation

```
ember install ember-static-heroicons
```

## Usage

```js
import AcademicCap from 'ember-static-heroicons/components/solid-20/academic-cap';

<template>
  <AcademicCap />
</template>
```

There are three variant sets which map to the following import paths:

- Outline 24x24, 1.5px stroke `ember-static-heroicons/components/outline-24/<icon-name>`
- Solid 24x24, Solid fill `ember-static-heroicons/components/solid-24/<icon-name>`
- Mini 20x20, Solid fill `ember-static-heroicons/components/solid-20/<icon-name>`

For previews, see: [heroicons.com](https://heroicons.com/)

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

## License

This project is licensed under the [MIT License](LICENSE.md).
