import { always, getM, identity, maybe } from '@anireact/prelude';
import React, { FunctionComponent, ReactNode, useEffect, useState } from 'react';

import {
    black,
    createLib,
    createTheme,
    RawLib,
    Size,
    watchBounds,
    watchHover,
    watchKeyboard,
    watchPrint,
    watchTouch,
    ThemedContext,
    MediaState,
} from '..';

export interface Themed {
    readonly id: string;
    readonly lib: RawLib;
    readonly children?: ReactNode;
}

export const Themed = ({ lib, id, children }: Themed) => {
    const themes = createLib(lib);

    const [currentId, switchTheme] = useState(id);

    const init = maybe(getM(themes, currentId), identity, always(black));

    const bounds = watchBounds(init, size => {
        setMedia({ ...media, size });
    });

    const [media, setMedia] = useState<MediaState>({
        size: bounds.indexOf(true) as Size,
        keyboard: true,
        touch: true,
        hover: true,
        print: false,
    });

    useEffect(() => {
        watchTouch(touch => setMedia({ ...media, touch }));
        watchHover(hover => setMedia({ ...media, hover }));
        watchPrint(print => setMedia({ ...media, print }));

        return watchKeyboard(keyboard => setMedia({ ...media, keyboard }));
    });

    return (
        <ThemedContext.Provider
            value={{
                themes,
                switchTheme,
                ...createTheme(init, media),
            }}
        >
            {children}
        </ThemedContext.Provider>
    );
};

export const themed = <Props extends object>(
    component: (props: Props, context: ThemedContext) => ReactNode,
): FunctionComponent<Props> => (props: Props) => (
    <ThemedContext.Consumer>{context => component(props, context)}</ThemedContext.Consumer>
);
