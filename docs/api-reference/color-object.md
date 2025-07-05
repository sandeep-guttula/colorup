# Color Object

The ColorUp.js library revolves around a central `Color` object, which provides a unified and consistent way to work with colors. When you parse a color input, the library returns a `Color` object that contains the original input along with its converted values in various color models.

### Object Structure

A `Color` object has the following structure:

```typescript
interface ColorObject {
  hex: string;
  rgb: { r: number; g: number; b: number; a?: number };
  hsl: { h: number; s: number; l: number; a?: number };
  hsv: { h: number; s: number; v: number; a?: number };
  alpha: number;
  format: ColorFormat;
}
```

- **`hex`**: The HEX representation of the color (e.g., `#3498db`).
- **`rgb`**: An object containing the Red, Green, and Blue values (0-255).
- **`hsl`**: An object containing the Hue (0-360), Saturation (0-100), and Lightness (0-100) values.
- **`hsv`**: An object containing the Hue (0-360), Saturation (0-100), and Value (0-100) values.
- **`alpha`**: The alpha transparency value (0-1).
- **`format`**: The original format of the input color (e.g., `'hex'`, `'rgb'`, `'named'`).

### Example

```javascript
import { color } from 'colorupjs';

const myColor = color('#3498db');

console.log(myColor.hex);     // '#3498db'
console.log(myColor.rgb);     // { r: 52, g: 152, b: 219 }
console.log(myColor.hsl);     // { h: 204, s: 70, l: 53 }
console.log(myColor.alpha);   // 1
console.log(myColor.format);  // 'hex'
```

By providing a consistent object structure, ColorUp.js makes it easy to switch between color models and access the values you need without manual conversions.
