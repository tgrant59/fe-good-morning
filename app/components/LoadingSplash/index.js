import React from 'react'

import { LoadingSplashContainer } from './LoadingSplash.styles'

const LoadingSplash = () => (
    <LoadingSplashContainer>
        <div id="cooking">
            <div className="bubble" />
            <div className="bubble" />
            <div className="bubble" />
            <div className="bubble" />
            <div className="bubble" />
            <div id="area">
                <div id="sides">
                    <div id="pan" />
                    <div id="handle" />
                </div>
                <div id="pancake">
                    <div id="pastry" />
                </div>
            </div>
        </div>
    </LoadingSplashContainer>
)

export default LoadingSplash
