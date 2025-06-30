# ColorUp.js Documentation

Welcome to the comprehensive documentation for **ColorUp.js** - a modern, lightweight, and feature-rich color utility library for JavaScript and TypeScript.

## What is ColorUp.js?

ColorUp.js is designed to make working with colors effortless and powerful. Whether you're building design systems, creating accessible interfaces, or generating beautiful color palettes, ColorUp.js provides all the tools you need.

## Key Features

- 🎯 **Universal Color Support** - HEX, RGB, HSL, HSV, named colors, and CSS strings
- 🎨 **Intelligent Palette Generation** - Color theory-based harmony algorithms
- ♿ **WCAG Accessibility Tools** - Built-in contrast checking and compliance
- 🌈 **Advanced Color Blending** - Photoshop-style blend modes
- 📱 **Framework Ready** - React, Vue, Angular integration examples
- 🔧 **Design Token Export** - CSS variables, SCSS, JSON, and more
- 📦 **Tree Shakeable** - Import only what you need
- 🔒 **Type Safe** - Full TypeScript support

## Quick Example

```javascript
import { ColorUp } from 'colorupjs';

// Create and manipulate colors
const color = new ColorUp('#3498db');
color.lighten(20).saturate(10);

// Generate palettes
const palette = color.palette('analogous', { steps: 5 });

// Check accessibility
const contrast = color.contrast('#ffffff');
console.log(contrast.grade); // "AA" or "AAA"
```
