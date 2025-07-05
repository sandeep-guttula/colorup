# ColorUp.js 🎨

A modern, lightweight, and comprehensive color utility library for JavaScript/TypeScript.

[![npm version](https://badge.fury.io/js/colorupjs.svg)](https://www.npmjs.com/package/colorupjs)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![Build Status](https://github.com/sandeep-guttula/colorup/workflows/CI/badge.svg)](https://github.com/sandeep-guttula/colorup/actions)

## ✨ Features

- 🎯 **Color Conversions** - Convert between HEX, RGB, HSL, and named colors.
- 🔧 **Color Manipulation** - Adjust brightness, saturation, and more.
- 🔍 **Color Validation** - A set of functions to validate color formats.
- 📦 **Tree Shakeable** - Import only what you need for optimal bundle size.
- 🔒 **Type Safe** - Full TypeScript support with comprehensive type definitions.
- 🚀 **Zero Dependencies** - Lightweight and self-contained.
- 🌐 **Cross Platform** - Works in browsers and Node.js environments.

## 📦 Installation

```bash
npm install colorupjs
```

```bash
yarn add colorupjs
```

```bash
pnpm add colorupjs
```

## 🚀 Quick Start

```javascript
import { hexToRgb, lighten, isDark } from 'colorupjs';

// Convert a hex color to RGB
const rgbColor = hexToRgb('#3498db'); // { r: 52, g: 152, b: 219 }

// Lighten a color
const lighterColor = lighten(rgbColor, 20); // { r: 123, g: 198, b: 248, a: 1 }

// Check if a color is dark
const isColorDark = isDark(rgbColor); // true
```

## 📚 API Documentation

### Color Conversions

- `hexToRgb(hex: string): { r: number; g: number; b: number }`
- `rgbToHex(r: number, g: number, b: number): string`
- `hslToRgb(h: number, s: number, l: number): { r: number; g: number; b: number }`
- `rgbToHsl(r: number, g: number, b: number): { h: number; s: number; l: number }`
- `hexToHsl(hex: string): { h: number; s: number; l: number }`
- `nameToHex(name: string): string`
- `HexToName(hex: string): string`

### Color Manipulation

- `isLight(color: RgbColor): boolean`
- `isDark(color: RgbColor): boolean`
- `adjustBrightness(color: RgbColor, amount: number): RgbColor`
- `adjustSaturation(color: RgbColor, amount: number): RgbColor`
- `lighten(color: RgbColor, amount: number): RgbColor`
- `darken(color: RgbColor, amount: number): RgbColor`
- `invertColor(color: RgbColor): RgbColor`
- `grayscale(color: RgbColor): RgbColor`

### Color Validation

- `isHexColor(value: unknown): value is HexColor`
- `isNamedColor(value: unknown): value is NamedColor`
- `isRgbColor(value: unknown): value is RgbColor`
- `isHslColor(value: unknown): value is HslColor`
- `isHsvColor(value: unknown): value is HsvColor`
- `isValidAlpha(value: unknown): value is number`
- `isValidRgbComponent(value: unknown): value is number`
- `isValidPercentage(value: unknown): value is number`
- `isValidHue(value: unknown): value is number`
- `detectFormat(value: unknown): ColorFormat | null`
- `validateColorInput(input: unknown): ValidationResult`

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1.  Fork the repository
2.  Create your feature branch (`git checkout -b feature/amazing-feature`)
3.  Commit your changes (`git commit -m 'Add some amazing feature'`)
4.  Push to the branch (`git push origin feature/amazing-feature`)
5.  Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Color theory algorithms inspired by Adobe Color and Coolors.co
- WCAG guidelines implementation based on W3C specifications
- Blend mode calculations adapted from CSS Compositing specification

## 🔗 Links

- [GitHub Repository](https://github.com/sandeep-guttula/colorup)
- [NPM Package](https://www.npmjs.com/package/colorupjs)

---

Made with ❤️ by [Sandeep Guttula](https://github.com/sandeep-guttula)