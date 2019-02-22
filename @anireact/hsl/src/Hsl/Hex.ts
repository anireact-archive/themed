import { clamp, map, padStart, round, size, toLower } from '@anireact/prelude';
import { A, Hsla, hslToRgb, Rgba, rgbToHsl } from '.';

export const hslToHex = (hsla: Hsla, compact = true, alpha = true): string => {
    const [r, g, b, a = 1 as A] = hslToRgb(hsla);

    const wide = map(alpha ? [r, g, b, a] : [r, g, b], x => {
        return toLower(padStart(round(clamp(0, x, 1) * 255).toString(16), 2, '0'));
    }).join('');

    const narrow = compact
        ? wide.replace(/^(.)\1(.)\2(.)\3(?:(.)\4)?$/u, ({}, r, g, b, a) => {
              return `${r}${g}${b}${a || ''}`;
          })
        : wide;

    return `#${narrow}`;
};

export const hexToHsl = (hex: string) => {
    const re = /^#?(?:(?<rr>[\da-f]{2})(?<gg>[\da-f]{2})(?<bb>[\da-f]{2})(?<aa>[\da-f]{2})?|(?<r>[\da-f])(?<g>[\da-f])(?<b>[\da-f])(?<a>[\da-f])?)$/u;

    const result = re.exec(toLower(hex));

    if (!result) return [0, 0, 0, 1] as Hsla;

    const { groups } = result;

    const r = groups!.rr || groups!.r;
    const g = groups!.gg || groups!.g;
    const b = groups!.bb || groups!.b;
    const a = groups!.aa || groups!.a || 'f';

    return rgbToHsl(map([r, g, b, a], x => parseInt(size(x) === 1 ? x + x : x, 16)) as Rgba);
};
