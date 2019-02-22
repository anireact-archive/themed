import { createColors, createFonts, createMedia, createX, MediaState, RawTheme, Theme } from '..';

export const createTheme = ({ id, name, ...init }: RawTheme, media: MediaState): Theme => {
    return {
        id,
        name,
        ...createX(init, media),
        ...createFonts(init, media),
        ...createColors(init, media),
        ...createMedia(media),
    };
};
