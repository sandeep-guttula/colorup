# Format Conversion

ColorUp.js provides a comprehensive set of functions for converting colors between different formats. Whether you're working with HEX, RGB, HSL, or named colors, the library makes it easy to get the format you need.

## `color()`

The primary function for all color conversions is the `color()` function. It accepts a color input in any supported format and returns a `Color` object containing the converted values.

**Signature:**

```typescript
color(input: AnyColor): ColorObject
```

**Example:**

```javascript
import { color } from 'colorupjs';

const fromHex = color('#3498db');
console.log(fromHex.rgb); // { r: 52, g: 152, b: 219 }

const fromRgb = color({ r: 52, g: 152, b: 219 });
console.log(fromRgb.hex); // '#3498db'

const fromHsl = color({ h: 204, s: 70, l: 53 });
console.log(fromHsl.hex); // '#3498db'

const fromNamed = color('tomato');
console.log(fromNamed.hex); // '#ff6347'
```

## Conversion Functions

While the `color()` function is the recommended way to handle conversions, the library also provides individual conversion functions for specific use cases.

### `hexToRgb`

Converts a HEX color string to an RGB object.

**Signature:**

```typescript
hexToRgb(hex: string): { r: number; g: number; b: number }
```

**Example:**

```javascript
import { hexToRgb } from 'colorupjs';

const rgb = hexToRgb('#3498db');
console.log(rgb); // { r: 52, g: 152, b: 219 }
```

### `rgbToHex`

Converts an RGB color object to a HEX string.

**Signature:**

```typescript
rgbToHex(r: number, g: number, b: number): string
```

**Example:**

```javascript
import { rgbToHex } from 'colorupjs';

const hex = rgbToHex(52, 152, 219);
console.log(hex); // '#3498db'
```

### `hslToRgb`

Converts an HSL color object to an RGB object.

**Signature:**

```typescript
hslToRgb(h: number, s: number, l: number): { r: number; g: number; b: number }
```

**Example:**

```javascript
import { hslToRgb } from 'colorupjs';

const rgb = hslToRgb(204, 70, 53);
console.log(rgb); // { r: 52, g: 152, b: 219 }
```

### `rgbToHsl`

Converts an RGB color object to an HSL object.

**Signature:**

```typescript
rgbToHsl(r: number, g: number, b: number): { h: number; s: number; l: number }
```

**Example:**

```javascript
import { rgbToHsl } from 'colorupjs';

const hsl = rgbToHsl(52, 152, 219);
console.log(hsl); // { h: 204, s: 70, l: 53 }
```

### `nameToHex`

Converts a CSS named color to its HEX value.

**Signature:**

```typescript
nameToHex(name: string): string
```

**Example:**

```javascript
import { nameToHex } from 'colorupjs';

const hex = nameToHex('tomato');
console.log(hex); // '#ff6347'
```

### `hexToHsl`

Converts a HEX color string to an HSL object.

**Signature:**

```typescript
hexToHsl(hex: string): { h: number; s: number; l: number }
```

**Example:**

```javascript
import { hexToHsl } from 'colorupjs';

const hsl = hexToHsl('#3498db');
console.log(hsl); // { h: 204, s: 70, l: 53 }
```

### `HexToName`

Converts a HEX color to its CSS named color equivalent.

**Signature:**

```typescript
HexToName(hex: string): string
```

**Example:**

```javascript
import { HexToName } from 'colorupjs';

const name = HexToName('#ff6347');
console.log(name); // 'tomato'
```