import React from 'react'
import { hot } from 'react-hot-loader'

const HelloWorld = () => {
    return (
        <div>
            <hi>Hello World!</hi>
        </div>
    )
}

export default hot(module)(HelloWorld)