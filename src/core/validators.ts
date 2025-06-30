/**
 * Validators for color input formats in the colorup library.
 * Includes format checks, range validations, and normalized detection.
 */

import {
    RgbColor,
    HslColor,
    HsvColor,
    HexColor,
    NamedColor,
    CssColor,
    ColorFormat,
    ValidationResult,
    ColorObject
} from './types';

import { isRgbComponent, isPercentage, isAlpha } from './utils';
import {
    NAMED_COLORS,
    HEX_COLOR_REGEX,
    RGB_RANGE,
    PERCENT_RANGE,
    ALPHA_RANGE
} from './constants';

/**
 * Check if a string is a valid hex color.
 */
export function isHexColor(value: unknown): value is HexColor {
    return typeof value === 'string' && HEX_COLOR_REGEX.test(value);
}

/**
 * Check if a string is a valid named color.
 */
export function isNamedColor(value: unknown): value is NamedColor {
    return typeof value === 'string' && NAMED_COLORS.includes(value.toLowerCase());
}


/**
 * Check if a value is a valid RGB color object.
 */
export function isRgbColor(value: unknown): value is RgbColor {
    if (typeof value !== 'object' || value === null) return false;
    const { r, g, b, a } = value as RgbColor;
    return (
        typeof r === 'number' &&
        typeof g === 'number' &&
        typeof b === 'number' &&
        isRgbComponent(r) &&
        isRgbComponent(g) &&
        isRgbComponent(b) &&
        (a === undefined || isAlpha(a))
    );
}

/**
 * Check if a value is a valid HSL color object.
 */
export function isHslColor(value: unknown): value is HslColor {
    if (typeof value !== 'object' || value === null) return false;
    const { h, s, l, a } = value as HslColor;
    return (
        typeof h === 'number' &&
        typeof s === 'number' &&
        typeof l === 'number' &&
        typeof h === 'number' &&
        isPercentage(s) &&
        isPercentage(l) &&
        (a === undefined || isAlpha(a))
    );
}

/**
 * Check if a value is a valid HSV color object.
 */
export function isHsvColor(value: unknown): value is HsvColor {
    if (typeof value !== 'object' || value === null) return false;
    const { h, s, v, a } = value as HsvColor;
    return (
        typeof h === 'number' &&
        typeof s === 'number' &&
        typeof v === 'number' &&
        isPercentage(s) &&
        isPercentage(v) &&
        (a === undefined || isAlpha(a))
    );
}

/**
 * Check if a string is a valid CSS color string.
 * (limited validation, assumes it's valid if not hex/named but still string)
 */
export function isCssColor(value: unknown): value is CssColor {
    return typeof value === 'string';
}

/**
 * Detect the color format.
 */
export function detectFormat(value: unknown): ColorFormat | null {
    if (isHexColor(value)) return ColorFormat.HEX;
    if (isRgbColor(value)) return ColorFormat.RGB;
    if (isHslColor(value)) return ColorFormat.HSL;
    if (isHsvColor(value)) return ColorFormat.HSV;
    if (isNamedColor(value)) return ColorFormat.NAMED;
    if (isCssColor(value)) return ColorFormat.CSS;
    return null;
}

/**
 * Validate and return metadata for a color input.
 */
export function validateColorInput(input: unknown): ValidationResult {
    const format = detectFormat(input);
    const errors: string[] = [];

    if (!format) {
        errors.push('Unrecognized color format');
    }

    return {
        isValid: errors.length === 0,
        format,
        errors
    };
}

/**
 * Check if a ColorObject is fully normalized.
 */
export function isNormalizedColor(obj: unknown): obj is ColorObject {
    if (typeof obj !== 'object' || obj === null) return false;
    const color = obj as ColorObject;
    return (
        typeof color.hex === 'string' &&
        isRgbColor(color.rgb) &&
        isHslColor(color.hsl) &&
        isHsvColor(color.hsv) &&
        typeof color.alpha === 'number' &&
        color.alpha >= 0 &&
        color.alpha <= 1 &&
        Object.values(ColorFormat).includes(color.format)
    );
}


/**
 * Validate if a number is in alpha range (0 to 1).
 */
export function isAlpha(value: unknown): value is number {
    return typeof value === 'number' && value >= ALPHA_RANGE.min && value <= ALPHA_RANGE.max;
}

/**
 * Validate if a number is in RGB range (0 to 255).
 */
export function isRgb(value: unknown): value is number {
    return typeof value === 'number' && value >= RGB_RANGE.min && value <= RGB_RANGE.max;
}

/**
 * Validate if a number is in percentage range (0 to 100).
 */
export function isPercentage(value: unknown): value is number {
    return typeof value === 'number' && value >= PERCENT_RANGE.min && value <= PERCENT_RANGE.max;
}

/**
 * Validate if a value is a valid color input.
 * This checks for all supported formats and returns a detailed result.
 */
export function isValidColorInput(value: unknown): ValidationResult {
    const format = detectFormat(value);
    const errors: string[] = [];

    if (!format) {
        errors.push('Unrecognized color format');
    } else {
        switch (format) {
            case ColorFormat.HEX:
                if (!isHexColor(value)) errors.push('Invalid hex color format');
                break;
            case ColorFormat.RGB:
                if (!isRgbColor(value)) errors.push('Invalid RGB color object');
                break;
            case ColorFormat.HSL:
                if (!isHslColor(value)) errors.push('Invalid HSL color object');
                break;
            case ColorFormat.HSV:
                if (!isHsvColor(value)) errors.push('Invalid HSV color object');
                break;
            case ColorFormat.NAMED:
                if (!isNamedColor(value)) errors.push('Invalid named color');
                break;
            case ColorFormat.CSS:
                if (!isCssColor(value)) errors.push('Invalid CSS color string');
                break;
        }
    }

    return {
        isValid: errors.length === 0,
        format,
        errors
    };
}