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
    text-shadow: 0 0 100px #fff;
    color: #FFF;
    opacity: 0;
    animation: ${fadeIn} 5s linear forwards, ${zoomIn} 10s ease-in forwards;
`;

const LokiForeground = styled.div`
    backdrop-filter: blur(1px);
    position: absolute;
    top: 0px;
    right: 0px;
    left: 0px;
    bottom: 0px;
    z-index: 10;
`;

export const Loki = ({ text, glow, blurFilter, finishedFn }) => {
    const textArray = useMemo(() => text.split(''), [text.toUpperCase()]);

    const [fonts, setFonts] = useState(() => returnUniqueFonts(textArray.length));

    useEffect(() => {
       const interval = setInterval(() => {
            setFonts(returnUniqueFonts(textArray.length));
        }, 500);

        setTimeout(() => {
            clearInterval(interval);

            if (finishedFn) finishedFn();
        }, 15000);
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
    finishedFn: null
}
