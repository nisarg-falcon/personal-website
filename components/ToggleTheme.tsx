import { Button, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

function ToggleTheme({ className = "" }) {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Button className={className + " "} bg="transparent" onClick={toggleColorMode}>
            {colorMode === 'light' ? <SunIcon color="black" /> : <MoonIcon />}
        </Button>
    )
}

export default ToggleTheme