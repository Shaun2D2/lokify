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

export const randomFontSelection = (addedFonts = []) => {
    if (!Array.isArray(addedFonts)) throw error('must be an array of strings');

    const combinedFonts = [...DEFAULT_FONTS, ...addedFonts];

    return combinedFonts[Math.floor(Math.random() * combinedFonts.length)];
};

export const returnUniqueFonts = (count) => {
    if (count > DEFAULT_FONTS.length) throw error('you have too many characters for unique characters');

    const fonts = [];

    while(fonts.length < count) {
        const selectedFont = randomFontSelection();

        if (!fonts.find((item) => item === selectedFont)) fonts.push(selectedFont);
    }

    return fonts;
};
