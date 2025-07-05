# Quick Start

Get up and running with ColorUp.js in just a few minutes! This guide will walk you through the essential features and common use cases.

## Convert a color

Let's start by converting a color from hex to rgb:

```javascript
import { hexToRgb } from 'colorupjs';

// Create a color from a hex value
const blue = hexToRgb('#3498db');

// Access different formats
console.log(blue); // { r: 52, g: 152, b: 219 }
```

## Basic Color Manipulation

Transform colors with simple functions:

```javascript
import { hexToRgb, lighten, darken } from 'colorupjs';

const baseColor = hexToRgb('#3498db');

// Lighten and darken
const lighter = lighten(baseColor, 20);
const darker = darken(baseColor, 15);

console.log('Original:', baseColor); // { r: 52, g: 152, b: 219 }
console.log('Lighter:', lighter); // { r: 138, g: 196, b: 234 }
console.log('Darker:', darker); // { r: 29, g: 110, b: 165 }
```