import React, { useEffect, useMemo, useState } from 'react';
import styled, { keyframes } from 'styled-components';

import { returnUniqueFonts } from '../utils';

import { fadeIn, zoomIn } from '../animation';

const LokiContainer = styled.div`
    display: flex;
    position: relative;
`;

const LokiCharacter = styled.span`
    font-size: 5.5rem;
    margin-left: 2.25rem;
    margin-right: 2.25rem;
    font-family: ${({ font }) => font};
    text-shadow: 0 0 30px #fff; // , 0 0 30px #fff
    color: #FFF;
    opacity: 0;
    animation: ${fadeIn} 5s linear forwards, ${zoomIn} 10s ease-in forwards;
    @media(max-width: 690px) {
        font-size: 2.5rem;
        margin-left: 1rem;
        margin-right: 1rem;
    }
`;

const LokiForeground = styled.div`
    backdrop-filter: blur(1.4px);
    position: absolute;
    top: 0px;
    right: 0px;
    left: 0px;
    bottom: 0px;
    z-index: 10;
`;

/**
 * next we need to make each individual letter have a jiggle, a font glow, and possibly a size.
 * Maybe we can do a config object for each letter that gets generated randomly when the font gets generated
 */
// const EXAMPLE_FONT_CONFIG = {
//     fontFamily: 'some-cool-font', // random font selected
//     jiggle: 'top', // random jiggle position
//     glow: 1 // glow intensity
// }

export const Loki = ({ text, glow, blurFilter, finishedFn, animationTime, textChangeSpeed }) => {
    const textArray = useMemo(() => text.split(''), [text.toUpperCase()]);

    const [fonts, setFonts] = useState(() => returnUniqueFonts(textArray.length));

    useEffect(() => {
       const interval = setInterval(() => {
            setFonts(returnUniqueFonts(textArray.length));
        }, textChangeSpeed);

        setTimeout(() => {
            clearInterval(interval);

            if (finishedFn) finishedFn();
        }, animationTime);
    }, [setFonts]);

    return (
        <LokiContainer>
            {blurFilter && <LokiForeground /> }
            {textArray.map((char, index) => <LokiCharacter font={fonts[index]}>{char}</LokiCharacter>)}
        </LokiContainer>
    );
}

Loki.defaultProps = {
    glow: true,
    text: 'LOKI',
    blurFilter: true,
    finishedFn: null,
    animationTime: 15000,
    textChangeSpeed: 500,
}
