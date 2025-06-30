# Installation

ColorUp.js can be installed and used in multiple ways, depending on your project setup and preferences.

## NPM Installation (Recommended)

### Using npm

```bash
npm install colorupjs
```

### Using yarn

```bash
yarn add colorupjs
```

### Using pnpm

```bash
pnpm add colorupjs
```

## CDN Installation

For quick prototyping or when you don't want to set up a build process, you can include ColorUp.js directly from a CDN.

### ES Modules (Modern Browsers)

```html
<script type="module">
  import { ColorUp } from 'https://cdn.skypack.dev/colorupjs';

  const color = new ColorUp('#3498db');
  console.log(color.hex); // #3498db
</script>
```

### UMD Build (Legacy Support)

```html
<script src="https://unpkg.com/colorupjs@latest/dist/colorupjs.umd.js"></script>
<script>
  const color = new ColorUp('#3498db');
  console.log(color.hex); // #3498db
</script>
```

## Import Methods

### ES6 Modules (Recommended)

```javascript
// Import the main ColorUp class
import { ColorUp } from 'colorupjs';

// Or import specific utilities
import { hexToRgb, rgbToHsl, isLight, adjustBrightness } from 'colorupjs';
```

### CommonJS (Node.js)

```javascript
// Import the entire library
const { ColorUp } = require('colorupjs');

// Or destructure specific functions
const { hexToRgb, rgbToHsl, isLight } = require('colorupjs');
```

### TypeScript

ColorUp.js includes full TypeScript definitions out of the box:

```typescript
import { ColorUp, RgbColor, HslColor, ColorFormat } from 'colorupjs';

const color: ColorUp = new ColorUp('#3498db');
const rgb: RgbColor = color.rgb;
const format: ColorFormat = color.format;
```

## Tree Shaking

ColorUp.js is built with tree shaking in mind. You can import only the functions you need:

```javascript
// Only imports the specific conversion functions
import { hexToRgb, rgbToHsl } from 'colorupjs/converters';

// Only imports color validation utilities
import { isHexColor, isRgbColor } from 'colorupjs/validators';

// Only imports color modification functions
import { lighten, darken, adjustSaturation } from 'colorupjs/modifiers';
```

## Build Requirements

### For Node.js Projects

- Node.js 14 or higher
- No additional build configuration required

### For Web Projects

ColorUp.js works with all modern bundlers:

- **Webpack** 4+ (ES2015+ support)
- **Rollup** (native ES modules)
- **Vite** (optimized for modern development)
- **Parcel** (zero-config bundling)
- **esbuild** (ultra-fast bundling)

### Browser Compatibility

- **Modern browsers**: Chrome 61+, Firefox 60+, Safari 10.1+, Edge 16+
- **ES5 compatibility**: Available through the UMD build
- **Mobile browsers**: iOS Safari 10.3+, Chrome Android 61+

## Framework-Specific Installation

### React

```bash
npm install colorupjs
```

```jsx
import React from 'react';
import { ColorUp } from 'colorupjs';

function ColorComponent() {
  const color = new ColorUp('#3498db');

  return <div style={{ backgroundColor: color.hex }}>Color: {color.hex}</div>;
}
```

### Vue.js

```bash
npm install colorupjs
```

```vue
<template>
  <div :style="{ backgroundColor: color }">Color: {{ color }}</div>
</template>

<script>
import { ColorUp } from 'colorupjs';

export default {
  data() {
    return {
      color: new ColorUp('#3498db').hex,
    };
  },
};
</script>
```

### Angular

```bash
npm install colorupjs
```

```typescript
import { Component } from '@angular/core';
import { ColorUp } from 'colorupjs';

@Component({
  selector: 'app-color',
  template: ` <div [style.background-color]="color">Color: {{ color }}</div> `,
})
export class ColorComponent {
  color = new ColorUp('#3498db').hex;
}
```

## Verification

After installation, verify that ColorUp.js is working correctly:

```javascript
import { ColorUp } from 'colorupjs';

// Test basic functionality
const color = new ColorUp('#3498db');
console.log('RGB:', color.rgb); // { r: 52, g: 152, b: 219 }
console.log('HSL:', color.hsl); // { h: 204, s: 70, l: 53 }

// Test color manipulation
const lighter = color.lighten(20);
console.log('Lighter:', lighter.hex); // Should show a lighter shade

console.log('✅ ColorUp.js installed successfully!');
```

## Troubleshooting

### Common Issues

**Module not found error**

```bash
# Clear npm cache and reinstall
npm cache clean --force
npm install colorupjs
```

**TypeScript declaration errors**

```bash
# Ensure you have the latest version
npm update colorupjs
```

**Build errors with older bundlers**

```javascript
// Add to your webpack config for Webpack 4
module.exports = {
  resolve: {
    mainFields: ['module', 'main'],
  },
};
```

### Getting Help

If you encounter any installation issues:

1. Check the [troubleshooting guide](../resources/troubleshooting.md)
2. Search existing [GitHub issues](https://github.com/sandeep-guttula/colorup/issues)
3. Create a new issue with your installation details

## Next Steps

Once you have ColorUp.js installed, continue to the [Quick Start](quick-start.md) guide to learn the basics, or jump into [Basic Usage](basic-usage.md) for detailed examples.
