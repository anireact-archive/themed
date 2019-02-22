import { map, px } from '@anireact/prelude';
import { MediaState, RawX, sizes, X } from '..';

export const createX = (raw: RawX, { size, touch }: MediaState): X => {
    const s = sizes[size];
    const xinit = raw[`x${s}` as keyof RawX] as number;
    const iinit = raw[`${touch ? 't' : 'i'}${s}` as keyof RawX];

    const [x, xl1, xl2, xl3, xl4, xl5, xl6, xs1, xs2, xs3, xs4, xs5, xs6] = xHelper(xinit);
    const [ix, ixl1, ixl2, ixl3, ixl4, ixl5, ixl6, ixs1, ixs2, ixs3, ixs4, ixs5, ixs6] = xHelper(iinit);

    return {
        touch,
        ...{ x, xl1, xl2, xl3, xl4, xl5, xl6, xs1, xs2, xs3, xs4, xs5, xs6 },
        ...{ ix, ixl1, ixl2, ixl3, ixl4, ixl5, ixl6, ixs1, ixs2, ixs3, ixs4, ixs5, ixs6 },
    };
};

const xHelper = (init: number): ReadonlyArray<string> => {
    return map(
        [
            init,
            init * (1 + 1 / 3),
            init * 2,
            init * 3,
            init * 4,
            init * 5,
            init * 6,
            init * 0.8,
            init * 0.5,
            init * 0.25,
            init * 0.15,
            init * 0.1,
            init * 0.05,
        ],
        px,
    );
};
