# Color Manipulation

ColorUp.js provides a powerful set of functions for manipulating colors. Whether you need to adjust brightness, change saturation, or create a color variation, these tools make it easy to get the perfect shade.

## `adjust()`

The `adjust()` function is the primary way to manipulate colors. It accepts a color and an object with adjustment properties, returning a new `Color` object with the changes applied.

**Signature:**

```typescript
adjust(color: AnyColor, adjustments: AdjustmentOptions): ColorObject
```

**Adjustment Options:**

- `lightness`: Adjusts the lightness (0-100).
- `saturation`: Adjusts the saturation (0-100).
- `hue`: Adjusts the hue (0-360).

**Example:**

```javascript
import { adjust, color } from 'colorupjs';

const myColor = color('#3498db');

const lighter = adjust(myColor, { lightness: 70 });
console.log(lighter.hex); // '#a9d7f4'

const desaturated = adjust(myColor, { saturation: 30 });
console.log(desaturated.hex); // '#6a8fa8'
```

## Manipulation Functions

For more specific adjustments, the library also provides individual manipulation functions.

### `lighten`

Lightens a color by a given amount (0-100).

**Signature:**

```typescript
lighten(color: AnyColor, amount: number): ColorObject
```

**Example:**

```javascript
import { lighten } from 'colorupjs';

const lighterColor = lighten('#3498db', 20);
console.log(lighterColor.hex); // '#85c8f6'
```

### `darken`

Darkens a color by a given amount (0-100).

**Signature:**

```typescript
darken(color: AnyColor, amount: number): ColorObject
```

**Example:**

```javascript
import { darken } from 'colorupjs';

const darkerColor = darken('#3498db', 20);
console.log(darkerColor.hex); // '#1c64a1'
```

### `saturate`

Increases the saturation of a color by a given amount (0-100).

**Signature:**

```typescript
saturate(color: AnyColor, amount: number): ColorObject
```

**Example:**

```javascript
import { saturate } from 'colorupjs';

const moreSaturated = saturate('#3498db', 20);
console.log(moreSaturated.hex); // '#1ba5f8'
```

### `desaturate`

Decreases the saturation of a color by a given amount (0-100).

**Signature:**

```typescript
desaturate(color: AnyColor, amount: number): ColorObject
```

**Example:**

```javascript
import { desaturate } from 'colorupjs';

const lessSaturated = desaturate('#3498db', 20);
console.log(lessSaturated.hex); // '#4d8bc0'
```

### `grayscale`

Converts a color to grayscale.

**Signature:**

```typescript
grayscale(color: AnyColor): ColorObject
```

**Example:**

```javascript
import { grayscale } from 'colorupjs';

const gray = grayscale('#3498db');
console.log(gray.hex); // '#969696'
```

### `invert`

Inverts the color.

**Signature:**

```typescript
invert(color: AnyColor): ColorObject
```

**Example:**

```javascript
import { invert } from 'colorupjs';

const inverted = invert('#3498db');
console.log(inverted.hex); // '#cba724'
```