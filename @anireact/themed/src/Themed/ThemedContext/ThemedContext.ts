import { identity } from '@anireact/prelude';
import { createContext } from 'react';
import { black } from '../Lib/black';
import { createTheme } from '../Theme/createTheme';
import { RawTheme } from '../Theme/RawTheme';
import { Theme } from '../Theme/Theme';

export interface ThemedContext extends Theme {
    readonly themes: ReadonlyMap<string, RawTheme>;
    readonly switchTheme: (id: string) => unknown;
}

export const ThemedContext = createContext<ThemedContext>({
    ...createTheme(black, { size: 0, keyboard: true, touch: true, hover: true, print: false }),
    themes: new Map([['black', black]]),
    switchTheme: identity,
});

ThemedContext.displayName = 'Themed';
