import { Colors, Fonts, Media, X } from '..';

export interface Theme extends X, Fonts, Colors, Media {
    readonly id: string;
    readonly name: string;
}
