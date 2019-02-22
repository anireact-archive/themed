import { Size } from '..';

export interface Media {
    readonly touch: boolean;
    readonly hover: boolean;
    readonly keyboard: boolean;
    readonly print: boolean;
    readonly size: Size;
}
