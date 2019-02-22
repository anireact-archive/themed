export interface MediaState {
    readonly keyboard: boolean;
    readonly touch: boolean;
    readonly hover: boolean;
    readonly print: boolean;
    readonly size: Size;
}

export type Size = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
