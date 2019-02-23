import { Hsla, Lcha, Rgba } from './Components';
import { hslToLch, lchToHsl } from './Hsl';
import { lchToLuv, luvToLch } from './Lch';
import { luvToXyz, xyzToLuv } from './Luv';
import { rgbToXyz, xyzToRgb } from './Xyz';

export const lchToRgb = (lcha: Lcha) => xyzToRgb(luvToXyz(lchToLuv(lcha)));
export const rgbToLch = (rgba: Rgba) => luvToLch(xyzToLuv(rgbToXyz(rgba)));

export const hslToRgb = (hsla: Hsla) => lchToRgb(hslToLch(hsla));
export const rgbToHsl = (rgba: Rgba) => lchToHsl(rgbToLch(rgba));
