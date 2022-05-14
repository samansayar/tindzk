import React, { useEffect, useState } from 'react'
import { Flex , Type } from './Styled/Body.styled';

export default function Header() {
    const [counter, setCounter] = React.useState(60);

    // Third Attempts
    React.useEffect(() => {
        const timer =
            counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter]);

    return (
        <Flex>
            <Type>Countdown: {counter}</Type>
        </Flex>
    )
}
