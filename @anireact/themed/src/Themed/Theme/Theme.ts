import { Colors } from '../Colors/Colors';
import { Fonts } from '../Fonts/Fonts';
import { Media } from '../Media/Media';
import { X } from '../X/X';

export interface Theme extends X, Fonts, Colors, Media {
    readonly id: string;
    readonly name: string;
}
