const DEFAULT_FONTS = [
  "'Caesar Dressing', cursive",
  "'Gugi', cursive",
  "'IM Fell English SC', serif",
  "'Major Mono Display', monospace",
  "'Orbitron', sans-serif",
  "'Press Start 2P', cursive",
  "'Rampart One', cursive",
  "'Source Code Pro', monospace",
  "'UnifrakturCook', cursive",
];

export const randomArrayElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

export const randomFontSelection = (addedFonts = []) => {
  if (!Array.isArray(addedFonts)) throw new Error('must be an array of strings');

  const combinedFonts = [...DEFAULT_FONTS, ...addedFonts];

  return randomArrayElement(combinedFonts);
};

export const returnUniqueFonts = (count) => {
  if (count > DEFAULT_FONTS.length) throw new Error('you have too many characters for unique characters');

  const fonts = [];

  while (fonts.length < count) {
    const selectedFont = randomFontSelection();

    if (!fonts.find((item) => item === selectedFont)) fonts.push(selectedFont);
  }

  return fonts;
};
