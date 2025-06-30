import { RgbColor } from '../core/types';
import { rgbToHsl, hslToRgb } from '../converters/color_conversions';
import { clamp } from '../core/utils';

/**
 * Determine if a color is light based on luminance.
 */
export function isLight(color: RgbColor): boolean {
  const { r, g, b } = color;
  const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
  return luminance > 186; // Standard threshold
}

/**
 * Determine if a color is dark based on luminance.
 */
export function isDark(color: RgbColor): boolean {
  return !isLight(color);
}

/**
 * Adjust brightness by modifying the lightness in HSL.
 */
export function adjustBrightness(color: RgbColor, amount: number): RgbColor {
  const { h, s, l } = rgbToHsl(color.r, color.g, color.b);
  const newL = clamp(l + amount, 0, 100);
  const { r, g, b } = hslToRgb(h, s, newL);
  return { r, g, b, a: color.a ?? 1 };
}

/**
 * Adjust saturation in HSL space.
 */
export function adjustSaturation(color: RgbColor, amount: number): RgbColor {
  const { h, s, l } = rgbToHsl(color.r, color.g, color.b);
  const newS = clamp(s + amount, 0, 100);
  const { r, g, b } = hslToRgb(h, newS, l);
  return { r, g, b, a: color.a ?? 1 };
}

/**
 * Lighten a color by increasing lightness.
 */
export function lighten(color: RgbColor, amount: number): RgbColor {
  return adjustBrightness(color, Math.abs(amount));
}

/**
 * Darken a color by decreasing lightness.
 */
export function darken(color: RgbColor, amount: number): RgbColor {
  return adjustBrightness(color, -Math.abs(amount));
}

/**
 * Inverts RGB values, keeps alpha intact.
 */
export function invertColor(color: RgbColor): RgbColor {
  return {
    r: 255 - color.r,
    g: 255 - color.g,
    b: 255 - color.b,
    a: color.a ?? 1,
  };
}

/**
 * Converts a color to grayscale using luminance.
 * Returns a new color object with the same alpha.
 */
export function grayscale(color: RgbColor): RgbColor {
  const gray = Math.round(0.299 * color.r + 0.587 * color.g + 0.114 * color.b);
  return { r: gray, g: gray, b: gray, a: color.a ?? 1 };
}

