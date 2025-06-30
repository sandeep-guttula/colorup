declare function hexToRgb(hex: string): {
    r: number;
    g: number;
    b: number;
};
declare function rgbToHex(r: number, g: number, b: number): string;
declare function hslToRgb(h: number, s: number, l: number): {
    r: number;
    g: number;
    b: number;
};
declare function rgbToHsl(r: number, g: number, b: number): {
    h: number;
    s: number;
    l: number;
};
declare function hexToHsl(hex: string): {
    h: number;
    s: number;
    l: number;
};
declare function nameToHex(name: string): string;
declare function HexToName(hex: string): string;

/**
 * Core type definitions for colorup library
 * Provides comprehensive type safety for all color operations
 */
interface RgbColor {
    r: number;
    g: number;
    b: number;
    a?: number;
}
interface HslColor {
    h: number;
    s: number;
    l: number;
    a?: number;
}
interface HsvColor {
    h: number;
    s: number;
    v: number;
    a?: number;
}
type HexColor = string;
type NamedColor = string;
type CssColor = string;
type ColorInput = HexColor | RgbColor | HslColor | HsvColor | NamedColor | CssColor;
interface ColorObject {
    hex: HexColor;
    rgb: RgbColor;
    hsl: HslColor;
    hsv: HsvColor;
    alpha: number;
    format: ColorFormat;
}
declare enum ColorFormat {
    HEX = "hex",
    RGB = "rgb",
    HSL = "hsl",
    HSV = "hsv",
    NAMED = "named",
    CSS = "css"
}
interface PaletteOptions {
    steps?: number;
    includeBase?: boolean;
    format?: ColorFormat;
}
interface GradientOptions {
    steps: number;
    colorSpace?: 'rgb' | 'hsl' | 'lab';
    easing?: 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out';
}
type HarmonyType = 'complementary' | 'analogous' | 'triadic' | 'tetradic' | 'split-complementary' | 'monochromatic';
interface HarmonyOptions {
    type: HarmonyType;
    steps?: number;
    angle?: number;
}
declare enum WcagLevel {
    AA = "AA",
    AAA = "AAA"
}
declare enum TextSize {
    NORMAL = "normal",
    LARGE = "large"
}
interface ContrastResult {
    ratio: number;
    grade: 'Fail' | 'AA' | 'AAA';
    level: WcagLevel | null;
    passes: {
        normal: {
            AA: boolean;
            AAA: boolean;
        };
        large: {
            AA: boolean;
            AAA: boolean;
        };
    };
}
declare enum ExportFormat {
    JSON = "json",
    CSS = "css",
    SCSS = "scss",
    LESS = "less",
    JS = "js",
    TS = "ts"
}
interface CssVariableOptions {
    prefix?: string;
    suffix?: string;
    includeFallbacks?: boolean;
    format?: 'kebab-case' | 'camelCase' | 'snake_case';
}
interface DesignTokenOptions {
    format: ExportFormat;
    namespace?: string;
    includeMetadata?: boolean;
    colorFormats?: ColorFormat[];
}
declare enum BlendMode {
    NORMAL = "normal",
    MULTIPLY = "multiply",
    SCREEN = "screen",
    OVERLAY = "overlay",
    SOFT_LIGHT = "soft-light",
    HARD_LIGHT = "hard-light",
    COLOR_DODGE = "color-dodge",
    COLOR_BURN = "color-burn",
    DARKEN = "darken",
    LIGHTEN = "lighten",
    DIFFERENCE = "difference",
    EXCLUSION = "exclusion"
}
interface BlendOptions {
    mode?: BlendMode;
    amount?: number;
}
interface ValidationResult {
    isValid: boolean;
    format: ColorFormat | null;
    errors: string[];
    normalized?: ColorObject;
}
interface ColorPlugin {
    name: string;
    version: string;
    methods: Record<string, Function>;
    install: (colorx: unknown) => void;
}
type ColorTuple = [number, number, number] | [number, number, number, number];
type ColorMatrix = number[][];
type ColorSpace = 'srgb' | 'p3' | 'rec2020' | 'lab' | 'xyz';
declare class ColorError extends Error {
    code: string;
    input?: unknown | undefined;
    constructor(message: string, code: string, input?: unknown | undefined);
}
interface ColorXConfig {
    defaultFormat: ColorFormat;
    precision: number;
    alphaSupport: boolean;
    strictValidation: boolean;
    performanceMode: boolean;
}

/**
 * Validators for color input formats in the colorup library.
 * Includes format checks, range validations, and normalized detection.
 */

/**
 * Check if a string is a valid hex color.
 */
declare function isHexColor(value: unknown): value is HexColor;
/**
 * Check if a string is a valid named color.
 */
declare function isNamedColor(value: unknown): value is NamedColor;
/**
 * Validate if a number is in alpha range (0 to 1).
 */
declare function isValidAlpha(value: unknown): value is number;
/**
 * Validate if a number is in RGB range (0 to 255).
 */
declare function isValidRgbComponent(value: unknown): value is number;
/**
 * Validate if a number is in percentage range (0 to 100).
 */
declare function isValidPercentage(value: unknown): value is number;
/**
 * Validate if a number is a valid hue (0-360).
 */
declare function isValidHue(value: unknown): value is number;
/**
 * Check if a value is a valid RGB color object.
 */
declare function isRgbColor(value: unknown): value is RgbColor;
/**
 * Check if a value is a valid HSL color object.
 */
declare function isHslColor(value: unknown): value is HslColor;
/**
 * Check if a value is a valid HSV color object.
 */
declare function isHsvColor(value: unknown): value is HsvColor;
/**
 * Check if a string is a valid CSS color string.
 * (limited validation, assumes it's valid if not hex/named but still string)
 */
declare function isCssColor(value: unknown): value is CssColor;
/**
 * Detect the color format.
 */
declare function detectFormat(value: unknown): ColorFormat | null;
/**
 * Validate and return metadata for a color input.
 */
declare function validateColorInput(input: unknown): ValidationResult;
/**
 * Check if a ColorObject is fully normalized.
 */
declare function isNormalizedColor(obj: unknown): obj is ColorObject;
/**
 * Validate if a value is a valid color input.
 * This checks for all supported formats and returns a detailed result.
 */
declare function isValidColorInput(value: unknown): ValidationResult;

/**
 * Core constant definitions for the colorup library.
 * Centralized values for formats, presets, blending, easing, and validation.
 */

declare const DEFAULT_CONFIG: {
    defaultFormat: ColorFormat;
    precision: number;
    alphaSupport: boolean;
    strictValidation: boolean;
    performanceMode: boolean;
};
declare const EASING_FUNCTIONS: readonly ["linear", "ease-in", "ease-out", "ease-in-out"];
declare const DEFAULT_PALETTE_STEPS = 5;
declare const DEFAULT_GRADIENT_STEPS = 10;
declare const DEFAULT_COLOR_SPACE = "rgb";
declare const NAMED_COLORS: string[];
declare const NAME_WITH_HEXCODE: Record<string, string>;
declare const SUPPORTED_FORMATS: ColorFormat[];
declare const SUPPORTED_EXPORTS: ExportFormat[];
declare const SUPPORTED_BLEND_MODES: BlendMode[];
declare const SUPPORTED_HARMONIES: HarmonyType[];
declare const WCAG_THRESHOLDS: {
    normal: {
        AA: number;
        AAA: number;
    };
    large: {
        AA: number;
        AAA: number;
    };
};
declare const HEX_SHORTHAND_REGEX: RegExp;
declare const VALID_HEX_REGEX: RegExp;
declare const RGB_RANGE: {
    min: number;
    max: number;
};
declare const HUE_RANGE: {
    min: number;
    max: number;
};
declare const PERCENT_RANGE: {
    min: number;
    max: number;
};
declare const ALPHA_RANGE: {
    min: number;
    max: number;
};
declare const HEX_COLOR_REGEX: RegExp;
declare const CORE_PLUGIN_METADATA: {
    name: string;
    version: string;
};

/**
 * Determine if a color is light based on luminance.
 */
declare function isLight(color: RgbColor): boolean;
/**
 * Determine if a color is dark based on luminance.
 */
declare function isDark(color: RgbColor): boolean;
/**
 * Adjust brightness by modifying the lightness in HSL.
 */
declare function adjustBrightness(color: RgbColor, amount: number): RgbColor;
/**
 * Adjust saturation in HSL space.
 */
declare function adjustSaturation(color: RgbColor, amount: number): RgbColor;
/**
 * Lighten a color by increasing lightness.
 */
declare function lighten(color: RgbColor, amount: number): RgbColor;
/**
 * Darken a color by decreasing lightness.
 */
declare function darken(color: RgbColor, amount: number): RgbColor;
/**
 * Inverts RGB values, keeps alpha intact.
 */
declare function invertColor(color: RgbColor): RgbColor;
/**
 * Converts a color to grayscale using luminance.
 * Returns a new color object with the same alpha.
 */
declare function grayscale(color: RgbColor): RgbColor;

export { ALPHA_RANGE, BlendMode, CORE_PLUGIN_METADATA, ColorError, ColorFormat, DEFAULT_COLOR_SPACE, DEFAULT_CONFIG, DEFAULT_GRADIENT_STEPS, DEFAULT_PALETTE_STEPS, EASING_FUNCTIONS, ExportFormat, HEX_COLOR_REGEX, HEX_SHORTHAND_REGEX, HUE_RANGE, HexToName, NAMED_COLORS, NAME_WITH_HEXCODE, PERCENT_RANGE, RGB_RANGE, SUPPORTED_BLEND_MODES, SUPPORTED_EXPORTS, SUPPORTED_FORMATS, SUPPORTED_HARMONIES, TextSize, VALID_HEX_REGEX, WCAG_THRESHOLDS, WcagLevel, adjustBrightness, adjustSaturation, darken, detectFormat, grayscale, hexToHsl, hexToRgb, hslToRgb, invertColor, isCssColor, isDark, isHexColor, isHslColor, isHsvColor, isLight, isNamedColor, isNormalizedColor, isRgbColor, isValidAlpha, isValidColorInput, isValidHue, isValidPercentage, isValidRgbComponent, lighten, nameToHex, rgbToHex, rgbToHsl, validateColorInput };
export type { BlendOptions, ColorInput, ColorMatrix, ColorObject, ColorPlugin, ColorSpace, ColorTuple, ColorXConfig, ContrastResult, CssColor, CssVariableOptions, DesignTokenOptions, GradientOptions, HarmonyOptions, HarmonyType, HexColor, HslColor, HsvColor, NamedColor, PaletteOptions, RgbColor, ValidationResult };
