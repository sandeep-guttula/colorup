# Quick Start

Get up and running with ColorUp.js in just a few minutes! This guide will walk you through the essential features and common use cases.

## Your First Color

Let's start by creating and manipulating your first color:

```javascript
import { ColorUp } from 'colorupjs';

// Create a color from a hex value
const blue = new ColorUp('#3498db');

// Access different formats
console.log(blue.hex); // "#3498db"
console.log(blue.rgb); // { r: 52, g: 152, b: 219 }
console.log(blue.hsl); // { h: 204, s: 70, l: 53 }
```

## Creating Colors from Different Formats

ColorUp.js accepts colors in multiple formats:

```javascript
// From hex strings
const red = new ColorUp('#e74c3c');
const redShort = new ColorUp('#f00');

// From RGB objects
const green = new ColorUp({ r: 46, g: 204, b: 113 });

// From HSL objects
const purple = new ColorUp({ h: 291, s: 64, l: 42 });

// From named colors
const orange = new ColorUp('orange');

// From CSS strings
const cyan = new ColorUp('rgb(26, 188, 156)');
const magenta = new ColorUp('hsl(300, 100%, 50%)');
```

## Basic Color Manipulation

Transform colors with simple, chainable methods:

```javascript
const baseColor = new ColorUp('#3498db');

// Lighten and darken
const lighter = baseColor.lighten(20);
const darker = baseColor.darken(15);

// Adjust saturation
const vibrant = baseColor.saturate(30);
const muted = baseColor.desaturate(25);

// Create complementary colors
const opposite = baseColor.complement();

// Invert colors
const inverted = baseColor.invert();

console.log('Original:', baseColor.hex); // #3498db
console.log('Lighter:', lighter.hex); // #5dade2
console.log('Darker:', darker.hex); // #2980b9
```

## Generating Color Palettes

Create beautiful, harmonious color schemes:

```javascript
const base = new ColorUp('#e74c3c');

// Generate different harmony types
const complementary = base.palette('complementary');
const analogous = base.palette('analogous', { steps: 5 });
const triadic = base.palette('triadic');
const monochromatic = base.palette('monochromatic', { steps: 7 });

console.log('Analogous colors:');
analogous.forEach((color, index) => {
  console.log(`  ${index + 1}: ${color.hex}`);
});

// Output:
// 1: #e74c3c (base)
// 2: #e74c60
// 3: #e74c84
// 4: #e74ca8
// 5: #e74ccc
```

## Checking Color Accessibility

Ensure your colors meet WCAG accessibility standards:

```javascript
const background = new ColorUp('#2c3e50');
const text = new ColorUp('#ecf0f1');

// Check contrast ratio
const contrast = background.contrast(text);

console.log(`Contrast ratio: ${contrast.ratio}`); // 12.37
console.log(`WCAG grade: ${contrast.grade}`); // "AAA"
console.log(`Passes AA: ${contrast.passes.normal.AA}`); // true
console.log(`Passes AAA: ${contrast.passes.normal.AAA}`); // true

// Quick accessibility check
const isAccessible = background.isReadable(text);
console.log(`Is readable: ${isAccessible}`); // true
```

## Working with Utility Functions

Use standalone functions for specific operations:

```javascript
import {
  hexToRgb,
  rgbToHsl,
  isLight,
  isDark,
  adjustBrightness,
} from 'colorupjs';

// Convert between formats
const rgb = hexToRgb('#3498db'); // { r: 52, g: 152, b: 219 }
const hsl = rgbToHsl(52, 152, 219); // { h: 204, s: 70, l: 53 }

// Check color properties
console.log(isLight(rgb)); // false
console.log(isDark(rgb)); // true

// Modify colors
const brighter = adjustBrightness(rgb, 20);
console.log(brighter); // { r: 52, g: 152, b: 219, a: 1 }
```

## Real-World Example: Theme Generator

Here's a practical example that generates a complete UI theme:

```javascript
import { ColorUp } from 'colorupjs';

function generateTheme(primaryColor) {
  const primary = new ColorUp(primaryColor);

  return {
    // Primary colors
    primary: primary.hex,
    primaryLight: primary.lighten(20).hex,
    primaryDark: primary.darken(20).hex,

    // Secondary colors (complementary)
    secondary: primary.complement().hex,
    secondaryLight: primary.complement().lighten(20).hex,
    secondaryDark: primary.complement().darken(20).hex,

    // Neutral colors
    background: '#ffffff',
    surface: '#f5f5f5',
    text: primary.isDark() ? '#212121' : '#ffffff',
    textSecondary: primary.isDark() ? '#757575' : '#e0e0e0',

    // Status colors
    success: new ColorUp('#4caf50').hex,
    warning: new ColorUp('#ff9800').hex,
    error: new ColorUp('#f44336').hex,

    // Accessibility info
    accessibility: {
      primaryContrast: primary.contrast('#ffffff').grade,
      textContrast: primary.contrast('#212121').grade,
    },
  };
}

// Generate a theme
const theme = generateTheme('#2196f3');
console.log(theme);

/*
Output:
{
  primary: "#2196f3",
  primaryLight: "#4fc3f7",
  primaryDark: "#1565c0",
  secondary: "#ff5722",
  secondaryLight: "#ff8a50",
  secondaryDark: "#d84315",
  background: "#ffffff",
  surface: "#f5f5f5",
  text: "#ffffff",
  textSecondary: "#e0e0e0",
  success: "#4caf50",
  warning: "#ff9800",
  error: "#f44336",
  accessibility: {
    primaryContrast: "AA",
    textContrast: "AAA"
  }
}
*/
```

## Interactive Color Picker Example

Create a simple color manipulation interface:

```javascript
import { ColorUp } from 'colorupjs';

class ColorPicker {
  constructor(initialColor = '#3498db') {
    this.color = new ColorUp(initialColor);
  }

  // Update color and return variations
  setColor(newColor) {
    this.color = new ColorUp(newColor);
    return this.getVariations();
  }

  // Get common color variations
  getVariations() {
    return {
      original: this.color.hex,
      lighter: this.color.lighten(20).hex,
      darker: this.color.darken(20).hex,
      saturated: this.color.saturate(25).hex,
      desaturated: this.color.desaturate(25).hex,
      complement: this.color.complement().hex,
      grayscale: this.color.grayscale().hex,
    };
  }

  // Get accessibility information
  getAccessibility(backgroundColor = '#ffffff') {
    const bg = new ColorUp(backgroundColor);
    const contrast = this.color.contrast(bg);

    return {
      ratio: contrast.ratio,
      grade: contrast.grade,
      isReadable: this.color.isReadable(bg),
      recommendations: this.getAccessibilityRecommendations(contrast),
    };
  }

  getAccessibilityRecommendations(contrast) {
    const recommendations = [];

    if (contrast.ratio < 4.5) {
      recommendations.push(
        'Consider darkening or lightening for better readability'
      );
    }
    if (contrast.ratio < 3) {
      recommendations.push('This combination fails WCAG guidelines');
    }
    if (contrast.ratio >= 7) {
      recommendations.push('Excellent contrast - meets AAA standards');
    }

    return recommendations;
  }
}

// Usage
const picker = new ColorPicker('#e74c3c');

console.log('Variations:', picker.getVariations());
console.log('Accessibility:', picker.getAccessibility('#ffffff'));

// Update color
console.log('New variations:', picker.setColor('#27ae60'));
```

## Performance Tips

For optimal performance:

```javascript
// Import only what you need
import { hexToRgb, rgbToHsl } from 'colorupjs/converters';
import { isLight, isDark } from 'colorupjs/modifiers';

// Reuse color instances when possible
const baseColors = {
  primary: new ColorUp('#3498db'),
  secondary: new ColorUp('#e74c3c'),
  success: new ColorUp('#27ae60'),
};

// Generate variations once and cache
const themeColors = Object.entries(baseColors).reduce((theme, [key, color]) => {
  theme[key] = {
    base: color.hex,
    light: color.lighten(20).hex,
    dark: color.darken(20).hex,
  };
  return theme;
}, {});
```

## Next Steps

Now that you understand the basics, explore these topics:

- **[Basic Usage](basic-usage.md)** - Dive deeper into core concepts
- **[API Reference](../api-reference/README.md)** - Complete method documentation
- **[Color Theory Guide](../guides/color-theory.md)** - Understanding color harmonies
- **[Accessibility Guide](../guides/accessibility-guide.md)** - WCAG compliance details
- **[Examples](../examples/basic-examples.md)** - More practical use cases

## Common Patterns Cheat Sheet

```javascript
// Color creation
const color = new ColorUp('#3498db');

// Format conversion
const hex = color.hex; // "#3498db"
const rgb = color.rgb; // { r: 52, g: 152, b: 219 }
const hsl = color.hsl; // { h: 204, s: 70, l: 53 }

// Color manipulation
const lighter = color.lighten(20);
const darker = color.darken(20);
const saturated = color.saturate(30);
const complement = color.complement();

// Palette generation
const analogous = color.palette('analogous', { steps: 5 });
const triadic = color.palette('triadic');

// Accessibility
const contrast = color.contrast('#ffffff');
const isReadable = color.isReadable('#000000');

// Utility functions
import { isLight, isDark, adjustBrightness } from 'colorupjs';
```

Ready to dive deeper? Continue to [Basic Usage](basic-usage.md) for comprehensive examples and detailed explanations!
