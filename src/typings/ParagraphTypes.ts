export const PARAGRAPH = [
  'ParagraphSmall',
  'Paragraph',
  'ParagraphLarge',
] as const;

export type ParagraphTypes = (typeof PARAGRAPH)[number];
