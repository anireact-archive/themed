import { hsl } from '@anireact/hsl';
import { map } from '@anireact/prelude';
import { MediaState } from '../Media/MediaState';
import { Colors } from './Colors';
import { RawColors } from './RawColors';

export const createColors = (raw: RawColors, { keyboard }: MediaState): Colors => {
    const { fg, bg, backdrop } = raw;

    const [focusP, focusS, focusI, focusO, focusW, focusE] = map(colors(raw, 'focus'), x => {
        return keyboard ? `0 0 0 2px ${x}` : 'none';
    });

    const [activeGlP, activeGlS, activeGlI, activeGlO, activeGlW, activeGlE] = colors(raw, 'activeGl');
    const [activeFgP, activeFgS, activeFgI, activeFgO, activeFgW, activeFgE] = colors(raw, 'activeFg');
    const [activeBgP, activeBgS, activeBgI, activeBgO, activeBgW, activeBgE] = colors(raw, 'activeBg');
    const [plainGlP, plainGlS, plainGlI, plainGlO, plainGlW, plainGlE] = colors(raw, 'plainGl');
    const [plainFgP, plainFgS, plainFgI, plainFgO, plainFgW, plainFgE] = colors(raw, 'plainFg');
    const [plainBgP, plainBgS, plainBgI, plainBgO, plainBgW, plainBgE] = colors(raw, 'plainBg');

    return {
        ...{ keyboard, fg, bg, backdrop },
        ...{ focusP, focusS, focusI, focusO, focusW, focusE },
        ...{ activeGlP, activeGlS, activeGlI, activeGlO, activeGlW, activeGlE },
        ...{ activeFgP, activeFgS, activeFgI, activeFgO, activeFgW, activeFgE },
        ...{ activeBgP, activeBgS, activeBgI, activeBgO, activeBgW, activeBgE },
        ...{ plainGlP, plainGlS, plainGlI, plainGlO, plainGlW, plainGlE },
        ...{ plainFgP, plainFgS, plainFgI, plainFgO, plainFgW, plainFgE },
        ...{ plainBgP, plainBgS, plainBgI, plainBgO, plainBgW, plainBgE },
    };
};

const colors = (init: RawColors, scope: string): ReadonlyArray<string> => {
    const s = `${scope}S` as 'focusS' | 'activeGlS' | 'activeFgS' | 'activeBgS' | 'plainGlS' | 'plainFgS' | 'plainBgS';
    const l = `${scope}L` as 'focusL' | 'activeGlL' | 'activeFgL' | 'activeBgL' | 'plainGlL' | 'plainFgL' | 'plainBgL';
    const a = `${scope}A` as 'focusA' | 'activeGlA' | 'activeFgA' | 'activeBgA' | 'plainGlA' | 'plainFgA' | 'plainBgA';

    return map([init.primary, init.secondary, init.info, init.ok, init.warn, init.error], h => {
        return hsl(h, init[s], init[l], init[a]);
    });
};
