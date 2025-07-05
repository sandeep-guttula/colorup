# Color Validation

ColorUp.js includes a suite of validation functions to ensure that your color inputs are valid and correctly formatted. These tools are essential for building robust color-related features and preventing unexpected errors.

## `validate()`

The `validate()` function is the primary way to validate colors. It checks if a color input is valid and returns a boolean result.

**Signature:**

```typescript
validate(color: any): boolean
```

**Example:**

```javascript
import { validate } from 'colorupjs';

console.log(validate('#3498db')); // true
console.log(validate('#3498d'));   // false
console.log(validate({ r: 255, g: 0, b: 0 })); // true
console.log(validate({ r: 256, g: 0, b: 0 })); // false
```

## Validation Functions

For more specific validation needs, the library provides individual functions to check for particular color formats.

### `isHex()`

Checks if a string is a valid HEX color.

**Signature:**

```typescript
isHex(value: string): boolean
```

**Example:**

```javascript
import { isHex } from 'colorupjs';

console.log(isHex('#3498db')); // true
console.log(isHex('#f0c'));    // true
console.log(isHex('3498db'));  // false
```

### `isRgb()`

Checks if an object is a valid RGB color.

**Signature:**

```typescript
isRgb(value: object): boolean
```

**Example:**

```javascript
import { isRgb } from 'colorupjs';

console.log(isRgb({ r: 52, g: 152, b: 219 })); // true
console.log(isRgb({ r: 256, g: 152, b: 219 })); // false
```

### `isHsl()`

Checks if an object is a valid HSL color.

**Signature:**

```typescript
isHsl(value: object): boolean
```

**Example:**

```javascript
import { isHsl } from 'colorupjs';

console.log(isHsl({ h: 204, s: 70, l: 53 })); // true
console.log(isHsl({ h: 400, s: 70, l: 53 })); // false
```

### `isNamedColor()`

Checks if a string is a valid CSS named color.

**Signature:**

```typescript
isNamedColor(value: string): boolean
```

**Example:**

```javascript
import { isNamedColor } from 'colorupjs';

console.log(isNamedColor('tomato')); // true
console.log(isNamedColor('mycolor')); // false
```
