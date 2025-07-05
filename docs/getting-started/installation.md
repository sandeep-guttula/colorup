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

## Import Methods

### ES6 Modules (Recommended)

```javascript
// Import specific utilities
import { hexToRgb, rgbToHsl, isLight, adjustBrightness } from 'colorupjs';
```

### CommonJS (Node.js)

```javascript
// Destructure specific functions
const { hexToRgb, rgbToHsl, isLight } = require('colorupjs');
```

### TypeScript

ColorUp.js includes full TypeScript definitions out of the box:

```typescript
import { hexToRgb, RgbColor } from 'colorupjs';

const rgb: RgbColor = hexToRgb('#3498db');
```

## Tree Shaking

ColorUp.js is built with tree shaking in mind. Modern bundlers (like Webpack, Rollup, Parcel) will automatically remove unused exports when you import specific functions from the main `colorupjs` package:

```javascript
// Only hexToRgb and lighten will be included in your bundle
import { hexToRgb, lighten } from 'colorupjs';

// All functions are imported, but unused ones will be tree-shaken
import * as ColorUp from 'colorupjs';
```