'use strict';

/**
 * Core type definitions for colorup library
 * Provides comprehensive type safety for all color operations
 */
// Color format enumeration
exports.ColorFormat = void 0;
(function (ColorFormat) {
    ColorFormat["HEX"] = "hex";
    ColorFormat["RGB"] = "rgb";
    ColorFormat["HSL"] = "hsl";
    ColorFormat["HSV"] = "hsv";
    ColorFormat["NAMED"] = "named";
    ColorFormat["CSS"] = "css";
})(exports.ColorFormat || (exports.ColorFormat = {}));
// Accessibility types
exports.WcagLevel = void 0;
(function (WcagLevel) {
    WcagLevel["AA"] = "AA";
    WcagLevel["AAA"] = "AAA";
})(exports.WcagLevel || (exports.WcagLevel = {}));
exports.TextSize = void 0;
(function (TextSize) {
    TextSize["NORMAL"] = "normal";
    TextSize["LARGE"] = "large";
})(exports.TextSize || (exports.TextSize = {}));
// Export format types
exports.ExportFormat = void 0;
(function (ExportFormat) {
    ExportFormat["JSON"] = "json";
    ExportFormat["CSS"] = "css";
    ExportFormat["SCSS"] = "scss";
    ExportFormat["LESS"] = "less";
    ExportFormat["JS"] = "js";
    ExportFormat["TS"] = "ts";
})(exports.ExportFormat || (exports.ExportFormat = {}));
// Blend and modifier types
exports.BlendMode = void 0;
(function (BlendMode) {
    BlendMode["NORMAL"] = "normal";
    BlendMode["MULTIPLY"] = "multiply";
    BlendMode["SCREEN"] = "screen";
    BlendMode["OVERLAY"] = "overlay";
    BlendMode["SOFT_LIGHT"] = "soft-light";
    BlendMode["HARD_LIGHT"] = "hard-light";
    BlendMode["COLOR_DODGE"] = "color-dodge";
    BlendMode["COLOR_BURN"] = "color-burn";
    BlendMode["DARKEN"] = "darken";
    BlendMode["LIGHTEN"] = "lighten";
    BlendMode["DIFFERENCE"] = "difference";
    BlendMode["EXCLUSION"] = "exclusion";
})(exports.BlendMode || (exports.BlendMode = {}));
// Error types
class ColorError extends Error {
    constructor(message, code, input) {
        super(message);
        this.code = code;
        this.input = input;
        this.name = 'ColorError';
    }
}

/**
 * Core constant definitions for the colorup library.
 * Centralized values for formats, presets, blending, easing, and validation.
 */
// Default configuration
const DEFAULT_CONFIG = {
    defaultFormat: exports.ColorFormat.HEX,
    precision: 3,
    alphaSupport: true,
    strictValidation: true,
    performanceMode: false,
};
// Common easing functions (used for gradients or transitions)
const EASING_FUNCTIONS = [
    'linear',
    'ease-in',
    'ease-out',
    'ease-in-out',
];
// Default palette and gradient options
const DEFAULT_PALETTE_STEPS = 5;
const DEFAULT_GRADIENT_STEPS = 10;
const DEFAULT_COLOR_SPACE = 'rgb';
const NAMED_COLORS = [
    'aliceblue',
    'antiquewhite',
    'aqua',
    'aquamarine',
    'azure',
    'beige',
    'bisque',
    'black',
    'blanchedalmond',
    'blue',
    'blueviolet',
    'brown',
    'burlywood',
    'cadetblue',
    'chartreuse',
    'chocolate',
    'coral',
    'cornflowerblue',
    'cornsilk',
    'crimson',
    'cyan',
    'darkblue',
    'darkcyan',
    'darkgoldenrod',
    'darkgray',
    'darkgreen',
    'darkgrey',
    'darkkhaki',
    'darkmagenta',
    'darkolivegreen',
    'darkorange',
    'darkorchid',
    'darkred',
    'darksalmon',
    'darkseagreen',
    'darkslateblue',
    'darkslategray',
    'darkslategrey',
    'darkturquoise',
    'darkviolet',
    'deeppink',
    'deepskyblue',
    'dimgray',
    'dimgrey',
    'dodgerblue',
    'firebrick',
    'floralwhite',
    'forestgreen',
    'fuchsia',
    'gainsboro',
    'ghostwhite',
    'gold',
    'goldenrod',
    'gray',
    'green',
    'greenyellow',
    'grey',
    'honeydew',
    'hotpink',
    'indianred',
    'indigo',
    'ivory',
    'khaki',
    'lavender',
    'lavenderblush',
    'lawngreen',
    'lemonchiffon',
    'lightblue',
    'lightcoral',
    'lightcyan',
    'lightgoldenrodyellow',
    'lightgray',
    'lightgreen',
    'lightgrey',
    'lightpink',
    'lightsalmon',
    'lightseagreen',
    'lightskyblue',
    'lightslategray',
    'lightslategrey',
    'lightsteelblue',
    'lightyellow',
    'lime',
    'limegreen',
    'linen',
    'magenta',
    'maroon',
    'mediumaquamarine',
    'mediumblue',
    'mediumorchid',
    'mediumpurple',
    'mediumseagreen',
    'mediumslateblue',
    'mediumspringgreen',
    'mediumturquoise',
    'mediumvioletred',
    'midnightblue',
    'mintcream',
    'mistyrose',
    'moccasin',
    'navajowhite',
    'navy',
    'oldlace',
    'olive',
    'olivedrab',
    'orange',
    'orangered',
    'orchid',
    'palegoldenrod',
    'palegreen',
    'paleturquoise',
    'palevioletred',
    'papayawhip',
    'peachpuff',
    'peru',
    'pink',
    'plum',
    'powderblue',
    'purple',
    'rebeccapurple',
    'red',
    'rosybrown',
    'royalblue',
    'saddlebrown',
    'salmon',
    'sandybrown',
    'seagreen',
    'seashell',
    'sienna',
    'silver',
    'skyblue',
    'slateblue',
    'slategray',
    'slategrey',
    'snow',
    'springgreen',
    'steelblue',
    'tan',
    'teal',
    'thistle',
    'tomato',
    'turquoise',
    'violet',
    'wheat',
    'white',
    'whitesmoke',
    'yellow',
    'yellowgreen',
];
const NAME_WITH_HEXCODE = {
    aliceblue: '#F0F8FF',
    antiquewhite: '#FAEBD7',
    aqua: '#00FFFF',
    aquamarine: '#7FFFD4',
    azure: '#F0FFFF',
    beige: '#F5F5DC',
    bisque: '#FFE4C4',
    black: '#000000',
    blanchedalmond: '#FFEBCD',
    blue: '#0000FF',
    blueviolet: '#8A2BE2',
    brown: '#A52A2A',
    burlywood: '#DEB887',
    cadetblue: '#5F9EA0',
    chartreuse: '#7FFF00',
    chocolate: '#D2691E',
    coral: '#FF7F50',
    cornflowerblue: '#6495ED',
    cornsilk: '#FFF8DC',
    crimson: '#DC143C',
    cyan: '#00FFFF',
    darkblue: '#00008B',
    darkcyan: '#008B8B',
    darkgoldenrod: '#B8860B',
    darkgray: '#A9A9A9',
    darkgreen: '#006400',
    darkgrey: '#A9A9A9',
    darkkhaki: '#BDB76B',
    darkmagenta: '#8B008B',
    darkolivegreen: '#556B2F',
    darkorange: '#FF8C00',
    darkorchid: '#9932CC',
    darkred: '#8B0000',
    darksalmon: '#E9967A',
    darkseagreen: '#8FBC8F',
    darkslateblue: '#483D8B',
    darkslategray: '#2F4F4F',
    darkslategrey: '#2F4F4F',
    darkturquoise: '#00CED1',
    darkviolet: '#9400D3',
    deeppink: '#FF1493',
    deepskyblue: '#00BFFF',
    dimgray: '#696969',
    dimgrey: '#696969',
    dodgerblue: '#1E90FF',
    firebrick: '#B22222',
    floralwhite: '#FFFAF0',
    forestgreen: '#228B22',
    fuchsia: '#FF00FF',
    gainsboro: '#DCDCDC',
    ghostwhite: '#F8F8FF',
    gold: '#FFD700',
    goldenrod: '#DAA520',
    gray: '#808080',
    green: '#008000',
    greenyellow: '#ADFF2F',
    grey: '#808080',
    honeydew: '#F0FFF0',
    hotpink: '#FF69B4',
    indianred: '#CD5C5C',
    indigo: '#4B0082',
    ivory: '#FFFFF0',
    khaki: '#F0E68C',
    lavender: '#E6E6FA',
    lavenderblush: '#FFF0F5',
    lawngreen: '#7CFC00',
    lemonchiffon: '#FFFACD',
    lightblue: '#ADD8E6',
    lightcoral: '#F08080',
    lightcyan: '#E0FFFF',
    lightgoldenrodyellow: '#FAFAD2',
    lightgray: '#D3D3D3',
    lightgreen: '#90EE90',
    lightgrey: '#D3D3D3',
    lightpink: '#FFB6C1',
    lightsalmon: '#FFA07A',
    lightseagreen: '#20B2AA',
    lightskyblue: '#87CEFA',
    lightslategray: '#778899',
    lightslategrey: '#778899',
    lightsteelblue: '#B0C4DE',
    lightyellow: '#FFFFE0',
    lime: '#00FF00',
    limegreen: '#32CD32',
    linen: '#FAF0E6',
    magenta: '#FF00FF',
    maroon: '#800000',
    mediumaquamarine: '#66CDAA',
    mediumblue: '#0000CD',
    mediumorchid: '#BA55D3',
    mediumpurple: '#9370DB',
    mediumseagreen: '#3CB371',
    mediumslateblue: '#7B68EE',
    mediumspringgreen: '#00FA9A',
    mediumturquoise: '#48D1CC',
    mediumvioletred: '#C71585',
    midnightblue: '#191970',
    mintcream: '#F5FFFA',
    mistyrose: '#FFE4E1',
    moccasin: '#FFE4B5',
    navajowhite: '#FFDEAD',
    navy: '#000080',
    oldlace: '#FDF5E6',
    olive: '#808000',
    olivedrab: '#6B8E23',
    orange: '#FFA500',
    orangered: '#FF4500',
    orchid: '#DA70D6',
    palegoldenrod: '#EEE8AA',
    palegreen: '#98FB98',
    paleturquoise: '#AFEEEE',
    palevioletred: '#DB7093',
    papayawhip: '#FFEFD5',
    peachpuff: '#FFDAB9',
    peru: '#CD853F',
    pink: '#FFC0CB',
    plum: '#DDA0DD',
    powderblue: '#B0E0E6',
    purple: '#800080',
    rebeccapurple: '#663399',
    red: '#FF0000',
    rosybrown: '#BC8F8F',
    royalblue: '#4169E1',
    saddlebrown: '#8B4513',
    salmon: '#FA8072',
    sandybrown: '#F4A460',
    seagreen: '#2E8B57',
    seashell: '#FFF5EE',
    sienna: '#A0522D',
    silver: '#C0C0C0',
    skyblue: '#87CEEB',
    slateblue: '#6A5ACD',
    slategray: '#708090',
    slategrey: '#708090',
    snow: '#FFFAFA',
    springgreen: '#00FF7F',
    steelblue: '#4682B4',
    tan: '#D2B48C',
    teal: '#008080',
    thistle: '#D8BFD8',
    tomato: '#FF6347',
    turquoise: '#40E0D0',
    violet: '#EE82EE',
    wheat: '#F5DEB3',
    white: '#FFFFFF',
    whitesmoke: '#F5F5F5',
    yellow: '#FFFF00',
    yellowgreen: '#9ACD32'
};
// Supported color formats
const SUPPORTED_FORMATS = [
    exports.ColorFormat.HEX,
    exports.ColorFormat.RGB,
    exports.ColorFormat.HSL,
    exports.ColorFormat.HSV,
    exports.ColorFormat.NAMED,
    exports.ColorFormat.CSS,
];
// Supported export formats
const SUPPORTED_EXPORTS = [
    exports.ExportFormat.JSON,
    exports.ExportFormat.CSS,
    exports.ExportFormat.SCSS,
    exports.ExportFormat.LESS,
    exports.ExportFormat.JS,
    exports.ExportFormat.TS,
];
// Supported blend modes (can be used to validate or iterate)
const SUPPORTED_BLEND_MODES = [
    exports.BlendMode.NORMAL,
    exports.BlendMode.MULTIPLY,
    exports.BlendMode.SCREEN,
    exports.BlendMode.OVERLAY,
    exports.BlendMode.SOFT_LIGHT,
    exports.BlendMode.HARD_LIGHT,
    exports.BlendMode.COLOR_DODGE,
    exports.BlendMode.COLOR_BURN,
    exports.BlendMode.DARKEN,
    exports.BlendMode.LIGHTEN,
    exports.BlendMode.DIFFERENCE,
    exports.BlendMode.EXCLUSION,
];
// Harmony types
const SUPPORTED_HARMONIES = [
    'complementary',
    'analogous',
    'triadic',
    'tetradic',
    'split-complementary',
    'monochromatic',
];
// WCAG contrast thresholds
const WCAG_THRESHOLDS = {
    [exports.TextSize.NORMAL]: {
        [exports.WcagLevel.AA]: 4.5,
        [exports.WcagLevel.AAA]: 7,
    },
    [exports.TextSize.LARGE]: {
        [exports.WcagLevel.AA]: 3,
        [exports.WcagLevel.AAA]: 4.5,
    },
};
// Hex shorthand expansion regex
const HEX_SHORTHAND_REGEX = /^#([a-f\d])([a-f\d])([a-f\d])$/i;
// Valid hex color regex (3, 4, 6, or 8 digits)
const VALID_HEX_REGEX = /^#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i;
// RGB/HSL input range guards
const RGB_RANGE = { min: 0, max: 255 };
const HUE_RANGE = { min: 0, max: 360 };
const PERCENT_RANGE = { min: 0, max: 100 };
const ALPHA_RANGE = { min: 0, max: 1 };
// Regex for matching hex colors: #RGB, #RRGGBB, #RGBA, #RRGGBBAA
const HEX_COLOR_REGEX = /^#(?:[0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/;
// Default plugin metadata (used internally for built-ins)
const CORE_PLUGIN_METADATA = {
    name: 'core',
    version: '1.0.0',
};

function hexToRgb(hex) {
    hex = hex.replace(/^#/, '');
    if (hex.length === 3)
        hex = hex
            .split('')
            .map((c) => c + c)
            .join('');
    const num = parseInt(hex, 16);
    return {
        r: (num >> 16) & 255,
        g: (num >> 8) & 255,
        b: num & 255,
    };
}
function rgbToHex(r, g, b) {
    return ('#' +
        [r, g, b]
            .map((x) => {
            const hex = x.toString(16);
            return hex.length === 1 ? '0' + hex : hex;
        })
            .join(''));
}
function hslToRgb(h, s, l) {
    s /= 100;
    l /= 100;
    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = l - c / 2;
    let r = 0, g = 0, b = 0;
    if (0 <= h && h < 60)
        [r, g, b] = [c, x, 0];
    else if (h < 120)
        [r, g, b] = [x, c, 0];
    else if (h < 180)
        [r, g, b] = [0, c, x];
    else if (h < 240)
        [r, g, b] = [0, x, c];
    else if (h < 300)
        [r, g, b] = [x, 0, c];
    else
        [r, g, b] = [c, 0, x];
    return {
        r: Math.round((r + m) * 255),
        g: Math.round((g + m) * 255),
        b: Math.round((b + m) * 255),
    };
}
function rgbToHsl(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    const l = (max + min) / 2;
    let h = 0, s = 0;
    if (max !== min) {
        const d = max - min;
        s = d / (1 - Math.abs(2 * l - 1));
        switch (max) {
            case r:
                h = ((g - b) / d + (g < b ? 6 : 0)) * 60;
                break;
            case g:
                h = ((b - r) / d + 2) * 60;
                break;
            case b:
                h = ((r - g) / d + 4) * 60;
                break;
        }
    }
    return {
        h: Math.round(h),
        s: Math.round(s * 100),
        l: Math.round(l * 100),
    };
}
function hexToHsl(hex) {
    const { r, g, b } = hexToRgb(hex);
    return rgbToHsl(r, g, b);
}
function nameToHex(name) {
    const color = NAME_WITH_HEXCODE[name.toLowerCase()];
    if (!color) {
        throw new Error(`Color name "${name}" is not recognized.`);
    }
    return color;
}
function HexToName(hex) {
    const color = Object.entries(NAME_WITH_HEXCODE).find(([, value]) => value.toLowerCase() === hex.toLowerCase());
    if (!color) {
        throw new Error(`Hex code "${hex}" is not recognized.`);
    }
    return color[0];
}

/**
 * Validators for color input formats in the colorup library.
 * Includes format checks, range validations, and normalized detection.
 */
/**
 * Check if a string is a valid hex color.
 */
function isHexColor(value) {
    return typeof value === 'string' && HEX_COLOR_REGEX.test(value);
}
/**
 * Check if a string is a valid named color.
 */
function isNamedColor(value) {
    return typeof value === 'string' && NAMED_COLORS.includes(value.toLowerCase());
}
/**
 * Validate if a number is in alpha range (0 to 1).
 */
function isValidAlpha(value) {
    return typeof value === 'number' && value >= ALPHA_RANGE.min && value <= ALPHA_RANGE.max;
}
/**
 * Validate if a number is in RGB range (0 to 255).
 */
function isValidRgbComponent(value) {
    return typeof value === 'number' && value >= RGB_RANGE.min && value <= RGB_RANGE.max;
}
/**
 * Validate if a number is in percentage range (0 to 100).
 */
function isValidPercentage(value) {
    return typeof value === 'number' && value >= PERCENT_RANGE.min && value <= PERCENT_RANGE.max;
}
/**
 * Validate if a number is a valid hue (0-360).
 */
function isValidHue(value) {
    return typeof value === 'number' && value >= 0 && value <= 360;
}
/**
 * Check if a value is a valid RGB color object.
 */
function isRgbColor(value) {
    if (typeof value !== 'object' || value === null)
        return false;
    const { r, g, b, a } = value;
    return (typeof r === 'number' &&
        typeof g === 'number' &&
        typeof b === 'number' &&
        isValidRgbComponent(r) &&
        isValidRgbComponent(g) &&
        isValidRgbComponent(b) &&
        (a === undefined || isValidAlpha(a)));
}
/**
 * Check if a value is a valid HSL color object.
 */
function isHslColor(value) {
    if (typeof value !== 'object' || value === null)
        return false;
    const { h, s, l, a } = value;
    return (typeof h === 'number' &&
        typeof s === 'number' &&
        typeof l === 'number' &&
        isValidHue(h) &&
        isValidPercentage(s) &&
        isValidPercentage(l) &&
        (a === undefined || isValidAlpha(a)));
}
/**
 * Check if a value is a valid HSV color object.
 */
function isHsvColor(value) {
    if (typeof value !== 'object' || value === null)
        return false;
    const { h, s, v, a } = value;
    return (typeof h === 'number' &&
        typeof s === 'number' &&
        typeof v === 'number' &&
        isValidHue(h) &&
        isValidPercentage(s) &&
        isValidPercentage(v) &&
        (a === undefined || isValidAlpha(a)));
}
/**
 * Check if a string is a valid CSS color string.
 * (limited validation, assumes it's valid if not hex/named but still string)
 */
function isCssColor(value) {
    if (typeof value !== 'string')
        return false;
    // Basic CSS color patterns
    const cssPatterns = [
        /^rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)$/i,
        /^rgba\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*[\d.]+\s*\)$/i,
        /^hsl\(\s*\d+\s*,\s*\d+%\s*,\s*\d+%\s*\)$/i,
        /^hsla\(\s*\d+\s*,\s*\d+%\s*,\s*\d+%\s*,\s*[\d.]+\s*\)$/i,
    ];
    return cssPatterns.some(pattern => pattern.test(value));
}
/**
 * Detect the color format.
 */
function detectFormat(value) {
    if (isHexColor(value))
        return exports.ColorFormat.HEX;
    if (isRgbColor(value))
        return exports.ColorFormat.RGB;
    if (isHslColor(value))
        return exports.ColorFormat.HSL;
    if (isHsvColor(value))
        return exports.ColorFormat.HSV;
    if (isNamedColor(value))
        return exports.ColorFormat.NAMED;
    if (isCssColor(value))
        return exports.ColorFormat.CSS;
    return null;
}
/**
 * Validate and return metadata for a color input.
 */
function validateColorInput(input) {
    const format = detectFormat(input);
    const errors = [];
    if (!format) {
        errors.push('Unrecognized color format');
    }
    else {
        switch (format) {
            case exports.ColorFormat.HEX:
                if (!isHexColor(input))
                    errors.push('Invalid hex color format');
                break;
            case exports.ColorFormat.RGB:
                if (!isRgbColor(input))
                    errors.push('Invalid RGB color object');
                break;
            case exports.ColorFormat.HSL:
                if (!isHslColor(input))
                    errors.push('Invalid HSL color object');
                break;
            case exports.ColorFormat.HSV:
                if (!isHsvColor(input))
                    errors.push('Invalid HSV color object');
                break;
            case exports.ColorFormat.NAMED:
                if (!isNamedColor(input))
                    errors.push('Invalid named color');
                break;
            case exports.ColorFormat.CSS:
                if (!isCssColor(input))
                    errors.push('Invalid CSS color string');
                break;
        }
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
function isNormalizedColor(obj) {
    if (typeof obj !== 'object' || obj === null)
        return false;
    const color = obj;
    return (typeof color.hex === 'string' &&
        isRgbColor(color.rgb) &&
        isHslColor(color.hsl) &&
        isHsvColor(color.hsv) &&
        typeof color.alpha === 'number' &&
        color.alpha >= 0 &&
        color.alpha <= 1 &&
        Object.values(exports.ColorFormat).includes(color.format));
}
/**
 * Validate if a value is a valid color input.
 * This checks for all supported formats and returns a detailed result.
 */
function isValidColorInput(value) {
    return validateColorInput(value);
}

/**
 * Core utilities for the colorup library.
 * Includes helpers for clamping, rounding, interpolation, conversion, and string manipulation.
 */
/**
 * Clamp a number between min and max.
 */
function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

/**
 * Determine if a color is light based on luminance.
 */
function isLight(color) {
    const { r, g, b } = color;
    const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
    return luminance > 186; // Standard threshold
}
/**
 * Determine if a color is dark based on luminance.
 */
function isDark(color) {
    return !isLight(color);
}
/**
 * Adjust brightness by modifying the lightness in HSL.
 */
function adjustBrightness(color, amount) {
    var _a;
    const { h, s, l } = rgbToHsl(color.r, color.g, color.b);
    const newL = clamp(l + amount, 0, 100);
    const { r, g, b } = hslToRgb(h, s, newL);
    return { r, g, b, a: (_a = color.a) !== null && _a !== void 0 ? _a : 1 };
}
/**
 * Adjust saturation in HSL space.
 */
function adjustSaturation(color, amount) {
    var _a;
    const { h, s, l } = rgbToHsl(color.r, color.g, color.b);
    const newS = clamp(s + amount, 0, 100);
    const { r, g, b } = hslToRgb(h, newS, l);
    return { r, g, b, a: (_a = color.a) !== null && _a !== void 0 ? _a : 1 };
}
/**
 * Lighten a color by increasing lightness.
 */
function lighten(color, amount) {
    return adjustBrightness(color, Math.abs(amount));
}
/**
 * Darken a color by decreasing lightness.
 */
function darken(color, amount) {
    return adjustBrightness(color, -Math.abs(amount));
}
/**
 * Inverts RGB values, keeps alpha intact.
 */
function invertColor(color) {
    var _a;
    return {
        r: 255 - color.r,
        g: 255 - color.g,
        b: 255 - color.b,
        a: (_a = color.a) !== null && _a !== void 0 ? _a : 1,
    };
}
/**
 * Converts a color to grayscale using luminance.
 * Returns a new color object with the same alpha.
 */
function grayscale(color) {
    var _a;
    const gray = Math.round(0.299 * color.r + 0.587 * color.g + 0.114 * color.b);
    return { r: gray, g: gray, b: gray, a: (_a = color.a) !== null && _a !== void 0 ? _a : 1 };
}

exports.ALPHA_RANGE = ALPHA_RANGE;
exports.CORE_PLUGIN_METADATA = CORE_PLUGIN_METADATA;
exports.ColorError = ColorError;
exports.DEFAULT_COLOR_SPACE = DEFAULT_COLOR_SPACE;
exports.DEFAULT_CONFIG = DEFAULT_CONFIG;
exports.DEFAULT_GRADIENT_STEPS = DEFAULT_GRADIENT_STEPS;
exports.DEFAULT_PALETTE_STEPS = DEFAULT_PALETTE_STEPS;
exports.EASING_FUNCTIONS = EASING_FUNCTIONS;
exports.HEX_COLOR_REGEX = HEX_COLOR_REGEX;
exports.HEX_SHORTHAND_REGEX = HEX_SHORTHAND_REGEX;
exports.HUE_RANGE = HUE_RANGE;
exports.HexToName = HexToName;
exports.NAMED_COLORS = NAMED_COLORS;
exports.NAME_WITH_HEXCODE = NAME_WITH_HEXCODE;
exports.PERCENT_RANGE = PERCENT_RANGE;
exports.RGB_RANGE = RGB_RANGE;
exports.SUPPORTED_BLEND_MODES = SUPPORTED_BLEND_MODES;
exports.SUPPORTED_EXPORTS = SUPPORTED_EXPORTS;
exports.SUPPORTED_FORMATS = SUPPORTED_FORMATS;
exports.SUPPORTED_HARMONIES = SUPPORTED_HARMONIES;
exports.VALID_HEX_REGEX = VALID_HEX_REGEX;
exports.WCAG_THRESHOLDS = WCAG_THRESHOLDS;
exports.adjustBrightness = adjustBrightness;
exports.adjustSaturation = adjustSaturation;
exports.darken = darken;
exports.detectFormat = detectFormat;
exports.grayscale = grayscale;
exports.hexToHsl = hexToHsl;
exports.hexToRgb = hexToRgb;
exports.hslToRgb = hslToRgb;
exports.invertColor = invertColor;
exports.isCssColor = isCssColor;
exports.isDark = isDark;
exports.isHexColor = isHexColor;
exports.isHslColor = isHslColor;
exports.isHsvColor = isHsvColor;
exports.isLight = isLight;
exports.isNamedColor = isNamedColor;
exports.isNormalizedColor = isNormalizedColor;
exports.isRgbColor = isRgbColor;
exports.isValidAlpha = isValidAlpha;
exports.isValidColorInput = isValidColorInput;
exports.isValidHue = isValidHue;
exports.isValidPercentage = isValidPercentage;
exports.isValidRgbComponent = isValidRgbComponent;
exports.lighten = lighten;
exports.nameToHex = nameToHex;
exports.rgbToHex = rgbToHex;
exports.rgbToHsl = rgbToHsl;
exports.validateColorInput = validateColorInput;
//# sourceMappingURL=index.js.map
