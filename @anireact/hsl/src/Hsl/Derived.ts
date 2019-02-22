import { Hsla, hslToLch, Lcha, lchToHsl, lchToLuv, luvToLch, luvToXyz, Rgba, rgbToXyz, xyzToLuv, xyzToRgb } from '.';

export const lchToRgb = (lcha: Lcha) => xyzToRgb(luvToXyz(lchToLuv(lcha)));
export const rgbToLch = (rgba: Rgba) => luvToLch(xyzToLuv(rgbToXyz(rgba)));

export const hslToRgb = (hsla: Hsla) => lchToRgb(hslToLch(hsla));
export const rgbToHsl = (rgba: Rgba) => lchToHsl(rgbToLch(rgba));
