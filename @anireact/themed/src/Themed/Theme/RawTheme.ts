import { RawColors } from '../Colors/RawColors';
import { RawFonts } from '../Fonts/RawFonts';
import { RawMedia } from '../Media/RawMedia';
import { RawX } from '../X/RawX';

export interface RawTheme extends RawX, RawFonts, RawColors, RawMedia {
    readonly id: string;
    readonly name: string;
}
