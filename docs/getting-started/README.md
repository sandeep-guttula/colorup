# Getting Started

Welcome to ColorUp.js! This section will help you get up and running with the library quickly and efficiently.

## What You'll Learn

In this section, you'll discover:

- **[Installation](installation.md)** - Different ways to install and include ColorUp.js in your project
- **[Quick Start](quick-start.md)** - Get running with ColorUp.js in under 5 minutes
- **[Basic Usage](basic-usage.md)** - Core concepts and fundamental operations

## Prerequisites

Before getting started with ColorUp.js, you should have:

- Basic knowledge of JavaScript or TypeScript
- Node.js 14+ (for npm installation)
- A modern browser that supports ES2015+ (for web usage)

## Why ColorUp.js?

ColorUp.js stands out from other color libraries because it offers:

### 🎯 **Universal Format Support**

Work with any color format seamlessly - HEX, RGB, HSL, HSV, named colors, and CSS strings.

### 🎨 **Intelligent Color Theory**

Generate harmonious color palettes using proven color theory algorithms.

### ♿ **Built-in Accessibility**

WCAG compliance checking built right into the core API.

### 🚀 **Performance First**

Lightweight, tree-shakeable, and optimized for modern JavaScript environments.

### 🔧 **Developer Experience**

Full TypeScript support, comprehensive documentation, and intuitive API design.

## Quick Preview

Here's a taste of what you can do with ColorUp.js:

```javascript
import { ColorUp } from 'colorupjs';

// Create a color from any format
const blue = new ColorUp('#3498db');
const red = new ColorUp({ r: 231, g: 76, b: 60 });
const green = new ColorUp('hsl(120, 100%, 50%)');

// Transform colors effortlessly
const lightBlue = blue.lighten(20);
const desaturatedRed = red.desaturate(30);

// Generate beautiful palettes
const palette = blue.palette('analogous', { steps: 5 });

// Check accessibility compliance
const contrast = blue.contrast('#ffffff');
console.log(`Contrast ratio: ${contrast.ratio}`);
console.log(`WCAG grade: ${contrast.grade}`);

// Export for design systems
const tokens = palette.export('css', { prefix: 'color' });
```

## Next Steps

Ready to dive in? Start with the [Installation](installation.md) guide to add ColorUp.js to your project, then move on to the [Quick Start](quick-start.md) tutorial for a hands-on introduction.

## Need Help?

- 📖 Check out our comprehensive [API Reference](../api-reference/README.md)
- 🎨 Explore [practical examples](../examples/basic-examples.md)
- 🔧 Learn about [framework integration](../guides/framework-integration.md)
- 🐛 Report issues on [GitHub](https://github.com/sandeep-guttula/colorup/issues)
