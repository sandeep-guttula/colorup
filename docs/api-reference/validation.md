# Color Validation

ColorUp.js includes a suite of validation functions to ensure that your color inputs are valid and correctly formatted. These tools are essential for building robust color-related features and preventing unexpected errors.

## Main Validation Function

### `isValidColorInput`

Validates if a value is a valid color input. This is the most comprehensive validation function, checking for all supported formats.

**Signature:**

```typescript
isValidColorInput(value: unknown): ValidationResult
```

**Example:**

```javascript
import { isValidColorInput } from 'colorupjs';

const result = isValidColorInput('#3498db');
console.log(result.isValid); // true
console.log(result.format); // 'hex'
```

## Format-Specific Validators

### `isHexColor`

Checks if a string is a valid HEX color.

**Signature:**

```typescript
isHexColor(value: unknown): value is HexColor
```

**Example:**

```javascript
import { isHexColor } from 'colorupjs';

console.log(isHexColor('#3498db')); // true
console.log(isHexColor('#f0c'));    // true
console.log(isHexColor('3498db'));  // false
```

### `isRgbColor`

Checks if an object is a valid RGB color.

**Signature:**

```typescript
isRgbColor(value: unknown): value is RgbColor
```

**Example:**

```javascript
import { isRgbColor } from 'colorupjs';

console.log(isRgbColor({ r: 52, g: 152, b: 219 })); // true
console.log(isRgbColor({ r: 256, g: 152, b: 219 })); // false
```

### `isHslColor`

Checks if an object is a valid HSL color.

**Signature:**

```typescript
isHslColor(value: unknown): value is HslColor
```

**Example:**

```javascript
import { isHslColor } from 'colorupjs';

console.log(isHslColor({ h: 204, s: 70, l: 53 })); // true
console.log(isHslColor({ h: 400, s: 70, l: 53 })); // false
```

### `isHsvColor`

Checks if an object is a valid HSV color.

**Signature:**

```typescript
isHsvColor(value: unknown): value is HsvColor
```

**Example:**

```javascript
import { isHsvColor } from 'colorupjs';

console.log(isHsvColor({ h: 204, s: 70, v: 53 })); // true
console.log(isHsvColor({ h: 400, s: 70, v: 53 })); // false
```

### `isNamedColor`

Checks if a string is a valid CSS named color.

**Signature:**

```typescript
isNamedColor(value: unknown): value is NamedColor
```

**Example:**

```javascript
import { isNamedColor } from 'colorupjs';

console.log(isNamedColor('tomato')); // true
console.log(isNamedColor('mycolor')); // false
```

### `isCssColor`

Checks if a string is a valid CSS color string (rgb, rgba, hsl, hsla).

**Signature:**

```typescript
isCssColor(value: unknown): value is CssColor
```

**Example:**

```javascript
import { isCssColor } from 'colorupjs';

console.log(isCssColor('rgb(52, 152, 219)')); // true
console.log(isCssColor('hsl(204, 70%, 53%)')); // true
```

## Component Validators

### `isValidAlpha`

Validates if a number is in the alpha range (0 to 1).

**Signature:**

```typescript
isValidAlpha(value: unknown): value is number
```

### `isValidRgbComponent`

Validates if a number is in the RGB range (0 to 255).

**Signature:**

```typescript
isValidRgbComponent(value: unknown): value is number
```

### `isValidPercentage`

Validates if a number is in the percentage range (0 to 100).

**Signature:**

```typescript
isValidPercentage(value: unknown): value is number
```

### `isValidHue`

Validates if a number is a valid hue (0-360).

**Signature:**

```typescript
isValidHue(value: unknown): value is number
```