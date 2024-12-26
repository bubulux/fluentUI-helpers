import type { EThemeSpacing } from "@theme/tokens";

export type TThemeSpacing = keyof typeof EThemeSpacing;

type TThemeShorthand<T> = [T] | [T, T] | [T, T, T] | [T, T, T, T];

export type TThemeShorthandSpacing = TThemeShorthand<TThemeSpacing>;
