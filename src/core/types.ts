/**
 * Core type definitions for colorup library
 * Provides comprehensive type safety for all color operations
 */

// Base color format types
export interface RgbColor {
    r: number;
    g: number;
    b: number;
    a?: number;
}

export interface HslColor {
    h: number;
    s: number;
    l: number;
    a?: number;
}

export interface HsvColor {
    h: number;
    s: number;
    v: number;
    a?: number;
}

// String representations
export type HexColor = string; // #RRGGBB or #RGB format
export type NamedColor = string; // CSS named colors
export type CssColor = string; // Any valid CSS color string

// Union type for all supported color formats
export type ColorInput =
    | HexColor
    | RgbColor
    | HslColor
    | HsvColor
    | NamedColor
    | CssColor;

// Normalized internal representation
export interface ColorObject {
    hex: HexColor;
    rgb: RgbColor;
    hsl: HslColor;
    hsv: HsvColor;
    alpha: number;
    format: ColorFormat;
}

// Color format enumeration
export enum ColorFormat {
    HEX = 'hex',
    RGB = 'rgb',
    HSL = 'hsl',
    HSV = 'hsv',
    NAMED = 'named',
    CSS = 'css'
}

// Palette generation types
export interface PaletteOptions {
    steps?: number;
    includeBase?: boolean;
    format?: ColorFormat;
}

export interface GradientOptions {
    steps: number;
    colorSpace?: 'rgb' | 'hsl' | 'lab';
    easing?: 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out';
}

// Harmony generation types
export type HarmonyType =
    | 'complementary'
    | 'analogous'
    | 'triadic'
    | 'tetradic'
    | 'split-complementary'
    | 'monochromatic';

export interface HarmonyOptions {
    type: HarmonyType;
    steps?: number;
    angle?: number; // For custom harmony angles
}

// Accessibility types
export enum WcagLevel {
    AA = 'AA',
    AAA = 'AAA'
}

export enum TextSize {
    NORMAL = 'normal',
    LARGE = 'large'
}

export interface ContrastResult {
    ratio: number;
    grade: 'Fail' | 'AA' | 'AAA';
    level: WcagLevel | null;
    passes: {
        normal: { AA: boolean; AAA: boolean };
        large: { AA: boolean; AAA: boolean };
    };
}

// Export format types
export enum ExportFormat {
    JSON = 'json',
    CSS = 'css',
    SCSS = 'scss',
    LESS = 'less',
    JS = 'js',
    TS = 'ts'
}

export interface CssVariableOptions {
    prefix?: string;
    suffix?: string;
    includeFallbacks?: boolean;
    format?: 'kebab-case' | 'camelCase' | 'snake_case';
}

export interface DesignTokenOptions {
    format: ExportFormat;
    namespace?: string;
    includeMetadata?: boolean;
    colorFormats?: ColorFormat[];
}

// Blend and modifier types
export enum BlendMode {
    NORMAL = 'normal',
    MULTIPLY = 'multiply',
    SCREEN = 'screen',
    OVERLAY = 'overlay',
    SOFT_LIGHT = 'soft-light',
    HARD_LIGHT = 'hard-light',
    COLOR_DODGE = 'color-dodge',
    COLOR_BURN = 'color-burn',
    DARKEN = 'darken',
    LIGHTEN = 'lighten',
    DIFFERENCE = 'difference',
    EXCLUSION = 'exclusion'
}

export interface BlendOptions {
    mode?: BlendMode;
    amount?: number; // 0-1
}

// Validation types
export interface ValidationResult {
    isValid: boolean;
    format: ColorFormat | null;
    errors: string[];
    normalized?: ColorObject;
}

// Plugin system types
export interface ColorPlugin {
    name: string;
    version: string;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    methods: Record<string, Function>;
    install: (colorx: unknown) => void;
}

// Utility types
export type ColorTuple = [number, number, number] | [number, number, number, number];
export type ColorMatrix = number[][];
export type ColorSpace = 'srgb' | 'p3' | 'rec2020' | 'lab' | 'xyz';

// Error types
export class ColorError extends Error {
    constructor(
        message: string,
        public code: string,
        public input?: unknown
    ) {
        super(message);
        this.name = 'ColorError';
    }
}

// Configuration types
export interface ColorXConfig {
    defaultFormat: ColorFormat;
    precision: number;
    alphaSupport: boolean;
    strictValidation: boolean;
    performanceMode: boolean;
}