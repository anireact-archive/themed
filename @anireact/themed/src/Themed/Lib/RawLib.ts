import { RawTheme } from '..';

export type RawLib = ReadonlyArray<Partial<RawTheme>> | Record<string, Partial<RawTheme>>;
