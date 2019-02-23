import { Media } from './Media';
import { MediaState } from './MediaState';

export const createMedia = ({ touch, hover, keyboard, size, print }: MediaState): Media => {
    return {
        touch,
        hover,
        keyboard,
        size,
        print,
    };
};
