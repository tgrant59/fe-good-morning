import styled, { keyframes, css } from 'styled-components'
import { colors, typography } from 'styles'

const shakeAnimation = keyframes`
    10%,
    90% {
        transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
        transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
        transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
        transform: translate3d(4px, 0, 0);
    }
`

const buttonDisabled = css`
    opacity: 0.65;
    cursor: wait;
`

export const Button = styled.button`
    display: inline-block;
    border-radius: 4px;
    margin: 10px;
    padding: 10px 30px;
    cursor: pointer;
    user-select: none;
    transition: all 150ms linear;
    text-align: center;
    white-space: nowrap;
    text-transform: uppercase;
    color: #fff;
    border: 0;
    font-size: 18px;
    font-weight: ${typography.fontWeights.EXTRA_LIGHT};
    line-height: 1.3;
    background-color: ${colors.theme.BLUE_DARK};
    box-shadow: 2px 5px 10px #e4e4e4;
    outline: none;
    ${props => (props.disabled ? buttonDisabled : '')};

    &:hover:enabled {
        opacity: 0.85;
    }
`

export const ButtonWithWiggle = Button.extend`
    box-shadow: 2px 5px 10px #e4e4e4;
    animation: ${shakeAnimation} 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    animation-delay: 0.5s;
`
