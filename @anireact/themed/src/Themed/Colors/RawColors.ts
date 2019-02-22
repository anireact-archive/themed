export interface RawColors {
    readonly fg: string;
    readonly bg: string;
    readonly backdrop: string;

    readonly primary: number;
    readonly secondary: number;
    readonly info: number;
    readonly ok: number;
    readonly warn: number;
    readonly error: number;

    readonly focusS: number;
    readonly focusL: number;
    readonly focusA: number;

    readonly activeGlS: number;
    readonly activeGlL: number;
    readonly activeGlA: number;

    readonly activeFgS: number;
    readonly activeFgL: number;
    readonly activeFgA: number;

    readonly activeBgS: number;
    readonly activeBgL: number;
    readonly activeBgA: number;

    readonly plainGlS: number;
    readonly plainGlL: number;
    readonly plainGlA: number;

    readonly plainFgS: number;
    readonly plainFgL: number;
    readonly plainFgA: number;

    readonly plainBgS: number;
    readonly plainBgL: number;
    readonly plainBgA: number;
}
