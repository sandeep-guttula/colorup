/**
 * Core constant definitions for the colorup library.
 * Centralized values for formats, presets, blending, easing, and validation.
 */

import {
    BlendMode,
    ColorFormat,
    HarmonyType,
    ExportFormat,
    WcagLevel,
    TextSize
} from './types';

// Default configuration
export const DEFAULT_CONFIG = {
    defaultFormat: ColorFormat.HEX,
    precision: 3,
    alphaSupport: true,
    strictValidation: true,
    performanceMode: false
};

// Common easing functions (used for gradients or transitions)
export const EASING_FUNCTIONS = ['linear', 'ease-in', 'ease-out', 'ease-in-out'] as const;

// Default palette and gradient options
export const DEFAULT_PALETTE_STEPS = 5;
export const DEFAULT_GRADIENT_STEPS = 10;
export const DEFAULT_COLOR_SPACE = 'rgb';

// Named CSS colors (W3C + some legacy)
export const NAMED_COLORS = [
    "aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque",
    "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood",
    "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue",
    "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod",
    "darkgray", "darkgreen", "darkgrey", "darkkhaki", "darkmagenta",
    "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon",
    "darkseagreen", "darkslateblue", "darkslategray", "darkslategrey",
    "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray",
    "dimgrey", "dodgerblue", "firebrick", "floralwhite", "forestgreen",
    "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "green",
    "greenyellow", "grey", "honeydew", "hotpink", "indianred", "indigo",
    "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon",
    "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray",
    "lightgreen", "lightgrey", "lightpink", "lightsalmon", "lightseagreen",
    "lightskyblue", "lightslategray", "lightslategrey", "lightsteelblue",
    "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon",
    "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple",
    "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise",
    "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin",
    "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange",
    "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise",
    "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum",
    "powderblue", "purple", "rebeccapurple", "red", "rosybrown", "royalblue",
    "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna",
    "silver", "skyblue", "slateblue", "slategray", "slategrey", "snow",
    "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise",
    "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen"
];
// Supported color formats
export const SUPPORTED_FORMATS: ColorFormat[] = [
    ColorFormat.HEX,
    ColorFormat.RGB,
    ColorFormat.HSL,
    ColorFormat.HSV,
    ColorFormat.NAMED,
    ColorFormat.CSS
];

// Supported export formats
export const SUPPORTED_EXPORTS: ExportFormat[] = [
    ExportFormat.JSON,
    ExportFormat.CSS,
    ExportFormat.SCSS,
    ExportFormat.LESS,
    ExportFormat.JS,
    ExportFormat.TS
];

// Supported blend modes (can be used to validate or iterate)
export const SUPPORTED_BLEND_MODES: BlendMode[] = [
    BlendMode.NORMAL,
    BlendMode.MULTIPLY,
    BlendMode.SCREEN,
    BlendMode.OVERLAY,
    BlendMode.SOFT_LIGHT,
    BlendMode.HARD_LIGHT,
    BlendMode.COLOR_DODGE,
    BlendMode.COLOR_BURN,
    BlendMode.DARKEN,
    BlendMode.LIGHTEN,
    BlendMode.DIFFERENCE,
    BlendMode.EXCLUSION
];

// Harmony types
export const SUPPORTED_HARMONIES: HarmonyType[] = [
    'complementary',
    'analogous',
    'triadic',
    'tetradic',
    'split-complementary',
    'monochromatic'
];

// WCAG contrast thresholds
export const WCAG_THRESHOLDS = {
    [TextSize.NORMAL]: {
        [WcagLevel.AA]: 4.5,
        [WcagLevel.AAA]: 7
    },
    [TextSize.LARGE]: {
        [WcagLevel.AA]: 3,
        [WcagLevel.AAA]: 4.5
    }
};

// Hex shorthand expansion regex
export const HEX_SHORTHAND_REGEX = /^#([a-f\d])([a-f\d])([a-f\d])$/i;

// Valid hex color regex (3, 4, 6, or 8 digits)
export const VALID_HEX_REGEX = /^#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i;

// RGB/HSL input range guards
export const RGB_RANGE = { min: 0, max: 255 };
export const HUE_RANGE = { min: 0, max: 360 };
export const PERCENT_RANGE = { min: 0, max: 100 };
export const ALPHA_RANGE = { min: 0, max: 1 };

// Regex for matching hex colors: #RGB, #RRGGBB, #RGBA, #RRGGBBAA
export const HEX_COLOR_REGEX = /^#(?:[0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/;


// Default plugin metadata (used internally for built-ins)
export const CORE_PLUGIN_METADATA = {
    name: 'core',
    version: '1.0.0'
};
