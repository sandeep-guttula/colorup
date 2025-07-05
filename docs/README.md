# ColorUp.js Documentation

Welcome to the comprehensive documentation for **ColorUp.js** - a modern, lightweight, and feature-rich color utility library for JavaScript and TypeScript.

## What is ColorUp.js?

ColorUp.js is designed to make working with colors effortless and powerful. Whether you're building design systems, creating accessible interfaces, or generating beautiful color palettes, ColorUp.js provides all the tools you need.

## Key Features

- 🎯 **Color Conversions** - Convert between HEX, RGB, HSL, and named colors.
- 🔧 **Color Manipulation** - Adjust brightness, saturation, and more.
- 🔍 **Color Validation** - A set of functions to validate color formats.
- 📦 **Tree Shakeable** - Import only what you need for optimal bundle size.
- 🔒 **Type Safe** - Full TypeScript support with comprehensive type definitions.
- 🚀 **Zero Dependencies** - Lightweight and self-contained.
- 🌐 **Cross Platform** - Works in browsers and Node.js environments.

## Quick Example

```javascript
import { hexToRgb, lighten, isDark } from 'colorupjs';

// Convert a hex color to RGB
const rgbColor = hexToRgb('#3498db'); // { r: 52, g: 152, b: 219 }

// Lighten a color
const lighterColor = lighten(rgbColor, 20); // { r: 123, g: 198, b: 248, a: 1 }

// Check if a color is dark
const isColorDark = isDark(rgbColor); // true
```