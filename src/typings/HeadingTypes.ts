export const HEADING = ['H1', 'H2', 'H3', 'H4'] as const;

export type HeadingTypes = (typeof HEADING)[number];
