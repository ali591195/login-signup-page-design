interface Paragraph {
  text: string;
}

export interface Checkbox {
  label: string;
  paragraph: Paragraph | null;
}

export interface Footer {
  text: string;
  anchorText: string;
}
