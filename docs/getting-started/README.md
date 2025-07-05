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

### 🚀 **Performance First**

Lightweight, tree-shakeable, and optimized for modern JavaScript environments.

### 🔧 **Developer Experience**

Full TypeScript support, comprehensive documentation, and intuitive API design.

## Quick Preview

Here's a taste of what you can do with ColorUp.js:

```javascript
import { hexToRgb, lighten, isHexColor } from 'colorupjs';

// Convert colors
const rgbColor = hexToRgb('#3498db');
console.log(rgbColor); // { r: 52, g: 152, b: 219 }

// Manipulate colors
const lighterRgb = lighten(rgbColor, 20);
console.log(lighterRgb); // { r: 133, g: 200, b: 246 }

// Validate colors
const isValid = isHexColor('#3498db');
console.log(isValid); // true
```

## Next Steps

Ready to dive in? Start with the [Installation](installation.md) guide to add ColorUp.js to your project, then move on to the [Quick Start](quick-start.md) tutorial for a hands-on introduction.

## Need Help?

- 📖 Check out our comprehensive [API Reference](../api-reference/README.md)
- 🎨 Explore [practical examples](../examples/basic-examples.md)
- 🔧 Learn about [framework integration](../guides/framework-integration.md)
- 🐛 Report issues on [GitHub](https://github.com/sandeep-guttula/colorup/issues)