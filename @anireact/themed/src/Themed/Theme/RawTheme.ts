import { RawColors, RawFonts, RawMedia, RawX } from '..';

export interface RawTheme extends RawX, RawFonts, RawColors, RawMedia {
    readonly id: string;
    readonly name: string;
}
