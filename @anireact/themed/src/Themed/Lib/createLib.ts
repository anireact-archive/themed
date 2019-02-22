import { isList, map, valuesO } from '@anireact/prelude';
import { black, RawLib, RawTheme } from '..';

export const createLib = (raw: RawLib): ReadonlyMap<string, RawTheme> => {
    return new Map(
        map(isList(raw) ? raw : valuesO(raw), init => {
            return [init.id || 'black', { ...black, ...init }] as [string, RawTheme];
        }),
    );
};
