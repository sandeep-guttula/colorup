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

ColorUp.js is built with tree shaking in mind. You can import only the functions you need:

```javascript
// Only imports the specific conversion functions
import { hexToRgb, rgbToHsl } from 'colorupjs/converters';

// Only imports color validation utilities
import { isHexColor, isRgbColor } from 'colorupjs/validators';

// Only imports color modification functions
import { lighten, darken, adjustSaturation } from 'colorupjs/modifiers';
```