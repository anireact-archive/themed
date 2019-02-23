import { Hsla } from './Components';
import { hslToHex } from './Hex';

export const hsl = (h: number, s: number, l: number, a = 1) => hslToHex([h, s, l, a] as Hsla);
