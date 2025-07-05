# Color Manipulation

ColorUp.js provides a powerful set of functions for manipulating colors. Whether you need to adjust brightness, change saturation, or create a color variation, these tools make it easy to get the perfect shade.

## Manipulation Functions

### `isLight`

Determines if a color is light based on its luminance.

**Signature:**

```typescript
isLight(color: RgbColor): boolean
```

**Example:**

```javascript
import { isLight } from 'colorupjs';

const color = { r: 255, g: 255, b: 255 };
const isLightColor = isLight(color);
console.log(isLightColor); // true
```

### `isDark`

Determines if a color is dark based on its luminance.

**Signature:**

```typescript
isDark(color: RgbColor): boolean
```

**Example:**

```javascript
import { isDark } from 'colorupjs';

const color = { r: 0, g: 0, b: 0 };
const isDarkColor = isDark(color);
console.log(isDarkColor); // true
```

### `adjustBrightness`

Adjusts the brightness of a color by a given amount.

**Signature:**

```typescript
adjustBrightness(color: RgbColor, amount: number): RgbColor
```

**Example:**

```javascript
import { adjustBrightness } from 'colorupjs';

const color = { r: 52, g: 152, b: 219 };
const brighterColor = adjustBrightness(color, 20);
console.log(brighterColor); // { r: 133, g: 200, b: 246 }
```

### `adjustSaturation`

Adjusts the saturation of a color by a given amount.

**Signature:**

```typescript
adjustSaturation(color: RgbColor, amount: number): RgbColor
```

**Example:**

```javascript
import { adjustSaturation } from 'colorupjs';

const color = { r: 52, g: 152, b: 219 };
const moreSaturated = adjustSaturation(color, 20);
console.log(moreSaturated); // { r: 27, g: 165, b: 248 }
```

### `lighten`

Lightens a color by a given amount.

**Signature:**

```typescript
lighten(color: RgbColor, amount: number): RgbColor
```

**Example:**

```javascript
import { lighten } from 'colorupjs';

const color = { r: 52, g: 152, b: 219 };
const lighterColor = lighten(color, 20);
console.log(lighterColor); // { r: 133, g: 200, b: 246 }
```

### `darken`

Darkens a color by a given amount.

**Signature:**

```typescript
darken(color: RgbColor, amount: number): RgbColor
```

**Example:**

```javascript
import { darken } from 'colorupjs';

const color = { r: 52, g: 152, b: 219 };
const darkerColor = darken(color, 20);
console.log(darkerColor); // { r: 28, g: 100, b: 161 }
```

### `invertColor`

Inverts the color.

**Signature:**

```typescript
invertColor(color: RgbColor): RgbColor
```

**Example:**

```javascript
import { invertColor } from 'colorupjs';

const color = { r: 52, g: 152, b: 219 };
const inverted = invertColor(color);
console.log(inverted); // { r: 203, g: 103, b: 36 }
```

### `grayscale`

Converts a color to grayscale.

**Signature:**

```typescript
grayscale(color: RgbColor): RgbColor
```

**Example:**

```javascript
import { grayscale } from 'colorupjs';

const color = { r: 52, g: 152, b: 219 };
const gray = grayscale(color);
console.log(gray); // { r: 123, g: 123, b: 123 }
```