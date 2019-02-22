import { Media, MediaState } from '..';

export const createMedia = ({ touch, hover, keyboard, size, print }: MediaState): Media => {
    return {
        touch,
        hover,
        keyboard,
        size,
        print,
    };
};
