/**
 * Core utilities for the colorup library.
 * Includes helpers for clamping, rounding, interpolation, conversion, and string manipulation.
 */

import { ColorTuple, ColorObject } from './types';
import { RGB_RANGE, PERCENT_RANGE, ALPHA_RANGE } from './constants';

/**
 * Clamp a number between min and max.
 */
export function clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
}

/**
 * Round a number to a given number of decimal places.
 */
export function round(value: number, precision = 2): number {
    const factor = 10 ** precision;
    return Math.round(value * factor) / factor;
}

/**
 * Convert percentage (0-100) to decimal (0-1).
 */
export function percentToDecimal(value: number): number {
    return clamp(value / 100, 0, 1);
}

/**
 * Convert decimal (0-1) to percentage (0-100).
 */
export function decimalToPercent(value: number): number {
    return clamp(value * 100, 0, 100);
}

/**
 * Normalize angle to [0, 360) degrees.
 */
export function normalizeAngle(degrees: number): number {
    return ((degrees % 360) + 360) % 360;
}

/**
 * Interpolate between two numbers.
 */
export function lerp(a: number, b: number, t: number): number {
    return a + (b - a) * t;
}

/**
 * Convert a hex character to a two-digit string.
 */
export function toHex(value: number): string {
    return clamp(Math.round(value), 0, 255).toString(16).padStart(2, '0');
}

/**
 * Pad a string with leading zero if needed.
 */
export function padZero(str: string, length = 2): string {
    return str.padStart(length, '0');
}

/**
 * Parse a hex string (like "ff") to a number.
 */
export function hexToDecimal(hex: string): number {
    return parseInt(hex, 16);
}

/**
 * Convert a hex string to RGB tuple.
 */
export function hexToRgb(hex: string): ColorTuple {
    let clean = hex.replace('#', '');

    if (clean.length === 3) {
        clean = clean.split('').map(c => c + c).join('');
    }

    const r = hexToDecimal(clean.slice(0, 2));
    const g = hexToDecimal(clean.slice(2, 4));
    const b = hexToDecimal(clean.slice(4, 6));

    return [r, g, b];
}

/**
 * Determine if a color is fully transparent.
 */
export function isTransparent(color: ColorObject): boolean {
    return color.alpha === 0;
}

/**
 * Deep clone a color tuple.
 */
export function cloneColorTuple(tuple: ColorTuple): ColorTuple {
    return [...tuple] as ColorTuple;
}

/**
 * Convert kebab-case or snake_case to camelCase.
 */
export function toCamelCase(str: string): string {
    return str.replace(/[-_](\w)/g, (_, c) => c.toUpperCase());
}

/**
 * Convert camelCase or snake_case to kebab-case.
 */
export function toKebabCase(str: string): string {
    return str
        .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
        .replace(/_/g, '-')
        .toLowerCase();
}

/**
 * Validate if a number is in RGB range.
 */
export function isRgbComponent(value: number): boolean {
    return value >= RGB_RANGE.min && value <= RGB_RANGE.max;
}

/**
 * Validate if a number is in percentage range.
 */
export function isPercentage(value: number): boolean {
    return value >= PERCENT_RANGE.min && value <= PERCENT_RANGE.max;
}

/**
 * Validate if a number is in alpha range.
 */
export function isAlpha(value: number): boolean {
    return value >= ALPHA_RANGE.min && value <= ALPHA_RANGE.max;
}
