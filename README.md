# ColorUp.js 🎨

A modern, lightweight, and comprehensive color utility library for JavaScript/TypeScript with advanced palette generation and WCAG accessibility tools.

[![npm version](https://badge.fury.io/js/colorupjs.svg)](https://www.npmjs.com/package/colorupjs)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![Build Status](https://github.com/sandeep-guttula/colorup/workflows/CI/badge.svg)](https://github.com/sandeep-guttula/colorup/actions)

## ✨ Features

- 🎯 **Universal Color Support** - Handle HEX, RGB, HSL, HSV, named colors, and CSS strings
- 🎨 **Palette Generation** - Create harmonious color palettes with color theory algorithms
- ♿ **WCAG Accessibility** - Built-in contrast checking and accessibility compliance tools
- 🌈 **Advanced Blending** - Multiple blend modes with Photoshop-style operations
- 📱 **Gradient Creation** - Generate smooth gradients with customizable easing functions
- 🔧 **Design Tokens** - Export colors to CSS variables, SCSS, JSON, and more
- 📦 **Tree Shakeable** - Import only what you need for optimal bundle size
- 🔒 **Type Safe** - Full TypeScript support with comprehensive type definitions
- 🚀 **Zero Dependencies** - Lightweight and self-contained
- 🌐 **Cross Platform** - Works in browsers and Node.js environments

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
import { ColorUp } from 'colorupjs';

// Create a color instance
const color = new ColorUp('#3498db');

// Convert between formats
color.toHex(); // "#3498db"
color.toRgb(); // { r: 52, g: 152, b: 219, a: 1 }
color.toHsl(); // { h: 204, s: 70, l: 53, a: 1 }

// Generate color variations
color.lighten(20); // Lighter shade
color.darken(15); // Darker shade
color.saturate(10); // More saturated

// Create color palettes
const palette = color.palette('analogous', { steps: 5 });
// ['#3498db', '#34a3db', '#34aedb', '#34b9db', '#34c4db']

// Check accessibility
const contrast = color.contrast('#ffffff');
console.log(contrast.ratio); // 4.56
console.log(contrast.grade); // "AA"
```

## 📚 API Documentation

### Color Creation

```javascript
// Multiple ways to create colors
const color1 = new ColorUp('#ff6b6b'); // Hex
const color2 = new ColorUp('rgb(255, 107, 107)'); // CSS RGB
const color3 = new ColorUp({ r: 255, g: 107, b: 107 }); // RGB Object
const color4 = new ColorUp({ h: 0, s: 100, l: 71 }); // HSL Object
const color5 = new ColorUp('tomato'); // Named color
```

### Format Conversion

```javascript
const color = new ColorUp('#3498db');

// String formats
color.toHex(); // "#3498db"
color.toRgbString(); // "rgb(52, 152, 219)"
color.toHslString(); // "hsl(204, 70%, 53%)"
color.toCssString(); // "rgb(52, 152, 219)"

// Object formats
color.toRgb(); // { r: 52, g: 152, b: 219, a: 1 }
color.toHsl(); // { h: 204, s: 70, l: 53, a: 1 }
color.toHsv(); // { h: 204, s: 76, v: 86, a: 1 }
```

### Color Manipulation

```javascript
const color = new ColorUp('#3498db');

// Brightness adjustments
color.lighten(20); // Increase lightness by 20%
color.darken(15); // Decrease lightness by 15%
color.brighten(10); // Increase brightness by 10%

// Saturation adjustments
color.saturate(25); // Increase saturation by 25%
color.desaturate(10); // Decrease saturation by 10%
color.grayscale(); // Convert to grayscale

// Alpha adjustments
color.fade(0.5); // Set alpha to 0.5
color.fadeIn(0.2); // Increase alpha by 0.2
color.fadeOut(0.3); // Decrease alpha by 0.3

// Color mixing
color.mix('#ff6b6b', 0.5); // Mix with red at 50%
```

### Palette Generation

```javascript
const baseColor = new ColorUp('#3498db');

// Harmony-based palettes
const complementary = baseColor.palette('complementary');
const analogous = baseColor.palette('analogous', { steps: 5 });
const triadic = baseColor.palette('triadic');
const tetradic = baseColor.palette('tetradic');

// Monochromatic variations
const monochrome = baseColor.palette('monochromatic', {
  steps: 7,
  includeBase: true,
});

// Custom gradients
const gradient = baseColor.gradient('#ff6b6b', {
  steps: 10,
  colorSpace: 'hsl',
  easing: 'ease-in-out',
});
```

### Accessibility & Contrast

```javascript
const background = new ColorUp('#ffffff');
const text = new ColorUp('#333333');

// Check contrast ratio
const contrast = text.contrast(background);
console.log(contrast.ratio); // 12.63
console.log(contrast.grade); // "AAA"

// Check WCAG compliance
console.log(contrast.passes.normal.AA); // true
console.log(contrast.passes.large.AAA); // true

// Find accessible colors
const accessibleColor = background.findAccessibleColor('#ff6b6b', {
  level: 'AA',
  size: 'normal',
});
```

### Color Analysis

```javascript
const color = new ColorUp('#3498db');

// Color properties
color.isDark(); // false
color.isLight(); // true
color.luminance(); // 0.289
color.brightness(); // 141

// Color temperature
color.temperature(); // "cool"

// Dominant color analysis
color.dominantHue(); // "blue"
```

### Advanced Blending

```javascript
const base = new ColorUp('#3498db');
const overlay = new ColorUp('#ff6b6b');

// Photoshop-style blend modes
base.blend(overlay, 'multiply');
base.blend(overlay, 'screen');
base.blend(overlay, 'overlay');
base.blend(overlay, 'soft-light');
base.blend(overlay, 'hard-light');
base.blend(overlay, 'color-dodge');
base.blend(overlay, 'color-burn');

// Custom blend with opacity
base.blend(overlay, 'normal', { amount: 0.5 });
```

### Export & Design Tokens

```javascript
const palette = [
  new ColorUp('#3498db'),
  new ColorUp('#2ecc71'),
  new ColorUp('#f39c12'),
  new ColorUp('#e74c3c'),
];

// Export as CSS variables
const cssVars = ColorUp.exportCss(palette, {
  prefix: 'brand',
  format: 'kebab-case',
});
// --brand-primary: #3498db;
// --brand-success: #2ecc71;

// Export as SCSS variables
const scssVars = ColorUp.exportScss(palette);

// Export as JSON
const jsonTokens = ColorUp.exportJson(palette, {
  includeMetadata: true,
  colorFormats: ['hex', 'rgb', 'hsl'],
});

// Export as JavaScript/TypeScript
const jsTokens = ColorUp.exportJs(palette);
const tsTokens = ColorUp.exportTs(palette);
```

## 🎨 Color Harmony Types

| Type                  | Description                              | Colors Generated |
| --------------------- | ---------------------------------------- | ---------------- |
| `complementary`       | Colors opposite on the color wheel       | 2 colors         |
| `analogous`           | Adjacent colors on the color wheel       | 3-5 colors       |
| `triadic`             | Three evenly spaced colors               | 3 colors         |
| `tetradic`            | Four evenly spaced colors (square)       | 4 colors         |
| `split-complementary` | Base + two colors adjacent to complement | 3 colors         |
| `monochromatic`       | Variations of the same hue               | 3-7 colors       |

## ♿ WCAG Compliance

ColorUp includes comprehensive accessibility tools:

- **Contrast Ratio Calculation** - Precise WCAG 2.1 compliant calculations
- **AA/AAA Level Checking** - Automatic compliance verification
- **Text Size Consideration** - Different thresholds for normal vs large text
- **Accessible Color Finder** - Automatically adjust colors to meet standards

```javascript
// Check if color combination meets WCAG standards
const isAccessible = ColorUp.checkAccessibility('#333', '#fff', {
  level: 'AA',
  size: 'normal',
}); // true

// Get the minimum contrast ratio needed
const minRatio = ColorUp.getMinimumRatio('AA', 'large'); // 3.0
```

## 📱 Framework Integration

### React

```jsx
import { ColorUp } from 'colorupjs';
import { useMemo } from 'react';

function ColorPalette({ baseColor }) {
  const palette = useMemo(
    () => new ColorUp(baseColor).palette('analogous', { steps: 5 }),
    [baseColor]
  );

  return (
    <div className="palette">
      {palette.map((color, index) => (
        <div
          key={index}
          style={{ backgroundColor: color }}
          className="color-swatch"
        />
      ))}
    </div>
  );
}
```

### Vue.js

```vue
<template>
  <div class="color-mixer">
    <div
      v-for="(color, index) in gradientColors"
      :key="index"
      :style="{ backgroundColor: color }"
      class="gradient-step"
    />
  </div>
</template>

<script>
import { ColorUp } from 'colorupjs';

export default {
  props: ['startColor', 'endColor'],
  computed: {
    gradientColors() {
      return new ColorUp(this.startColor).gradient(this.endColor, {
        steps: 10,
        easing: 'ease-in-out',
      });
    },
  },
};
</script>
```

## 🔧 Configuration

```javascript
// Global configuration
ColorUp.config({
  defaultFormat: 'hex',
  precision: 3,
  alphaSupport: true,
  strictValidation: true,
  performanceMode: false,
});

// Per-instance configuration
const color = new ColorUp('#3498db', {
  format: 'hsl',
  precision: 2,
});
```

## 📊 Performance

ColorUp is optimized for performance:

- **Lazy Evaluation** - Calculations performed only when needed
- **Caching** - Expensive operations are cached automatically
- **Tree Shaking** - Import only the functions you use
- **Memory Efficient** - Minimal memory footprint
- **Fast Algorithms** - Optimized color space conversions

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage

# Run linting
npm run lint

# Run full validation
npm run validate
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Color theory algorithms inspired by Adobe Color and Coolors.co
- WCAG guidelines implementation based on W3C specifications
- Blend mode calculations adapted from CSS Compositing specification

## 🔗 Links

- [GitHub Repository](https://github.com/sandeep-guttula/colorup)
- [NPM Package](https://www.npmjs.com/package/colorupjs)
- [Documentation](https://colorup-docs.vercel.app)
- [Examples & Demos](https://colorup-examples.vercel.app)

---

Made with ❤️ by [Sandeep Guttula](https://github.com/sandeep-guttula)
